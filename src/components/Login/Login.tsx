import loginImage from "../../undraw_login_re_4vu2.svg"
import './Login.css';
import { loadBlockchainData } from '../../domain/blockchain-connector';
import React, { ChangeEvent, useState } from 'react'
import { Container, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material'

import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import { useCallback, useEffect, useReducer } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { ellipseAddress, getChainData } from './utilities'



function Login(this: any) {

    let navigate = useNavigate();
    const [usernameState, setUsernameState] = useState("")
    const [passwordState, setPasswordState] = useState("")
    const [error1, setErrorState] = useState("")
    const [errors, setErrors] = React.useState<{
        username: string,
        password: string
    }>()
    const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'

    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: INFURA_ID, // required
          },
        },
        'custom-walletlink': {
          display: {
            logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
            name: 'Coinbase',
            description: 'Connect to Coinbase Wallet (not Coinbase App)',
          },
          options: {
            appName: 'Coinbase', // Your app name
            networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
            chainId: 1,
          },
          package: WalletLink,
          connector: async (_, options) => {
            const { appName, networkUrl, chainId } = options
            const walletLink = new WalletLink({
              appName,
            })
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
            await provider.enable()
            return provider
          },
        },
      }
      
      let web3Modal
      if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
          network: 'mainnet', // optional
          cacheProvider: true,
          providerOptions, // required
        })
      }
      
      type StateType = {
        provider?: any
        web3Provider?: any
        address?: string
        chainId?: number
      }
      
      type ActionType =
        | {
            type: 'SET_WEB3_PROVIDER'
            provider?: StateType['provider']
            web3Provider?: StateType['web3Provider']
            address?: StateType['address']
            chainId?: StateType['chainId']
          }
        | {
            type: 'SET_ADDRESS'
            address?: StateType['address']
          }
        | {
            type: 'SET_CHAIN_ID'
            chainId?: StateType['chainId']
          }
        | {
            type: 'RESET_WEB3_PROVIDER'
          }
      
      const initialState: StateType = {
        provider: null,
        web3Provider: null,
        address: null,
        chainId: null,
      }
      
      function reducer(state: StateType, action: ActionType): StateType {
        switch (action.type) {
          case 'SET_WEB3_PROVIDER':
            return {
              ...state,
              provider: action.provider,
              web3Provider: action.web3Provider,
              address: action.address,
              chainId: action.chainId,
            }
          case 'SET_ADDRESS':
            return {
              ...state,
              address: action.address,
            }
          case 'SET_CHAIN_ID':
            return {
              ...state,
              chainId: action.chainId,
            }
          case 'RESET_WEB3_PROVIDER':
            return initialState
          default:
            throw new Error()
        }
      }
      
        const [state, dispatch] = useReducer(reducer, initialState)
        const { provider, web3Provider, address, chainId } = state
      
        const connect = useCallback(async function () {
          // This is the initial `provider` that is returned when
          // using web3Modal to connect. Can be MetaMask or WalletConnect.
          const provider = await web3Modal.connect()
      
          // We plug the initial `provider` into ethers.js and get back
          // a Web3Provider. This will add on methods from ethers.js and
          // event listeners such as `.on()` will be different.
          const web3Provider = new providers.Web3Provider(provider)
      
          const signer = web3Provider.getSigner()
          const address = await signer.getAddress()
      
          const network = await web3Provider.getNetwork()
      
          dispatch({
            type: 'SET_WEB3_PROVIDER',
            provider,
            web3Provider,
            address,
            chainId: network.chainId,
          })
        }, [])
      
        const disconnect = useCallback(
          async function () {
            await web3Modal.clearCachedProvider()
            if (provider?.disconnect && typeof provider.disconnect === 'function') {
              await provider.disconnect()
            }
            dispatch({
              type: 'RESET_WEB3_PROVIDER',
            })
          },
          [provider]
        )
      
        // Auto connect to the cached provider
        useEffect(() => {
          if (web3Modal.cachedProvider) {
            connect()
          }
        }, [connect])
      
        // A `provider` should come with EIP-1193 events. We'll listen for those events
        // here so that when a user switches accounts or networks, we can update the
        // local React state with that new information.
        useEffect(() => {
          if (provider?.on) {
            const handleAccountsChanged = (accounts: string[]) => {
              // eslint-disable-next-line no-console
              console.log('accountsChanged', accounts)
              dispatch({
                type: 'SET_ADDRESS',
                address: accounts[0],
              })
            }
      
            // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
            const handleChainChanged = (_hexChainId: string) => {
              window.location.reload()
            }
      
            const handleDisconnect = (error: { code: number; message: string }) => {
              // eslint-disable-next-line no-console
              console.log('disconnect', error)
              disconnect()
            }
      
            provider.on('accountsChanged', handleAccountsChanged)
            provider.on('chainChanged', handleChainChanged)
            provider.on('disconnect', handleDisconnect)
      
            // Subscription Cleanup
            return () => {
              if (provider.removeListener) {
                provider.removeListener('accountsChanged', handleAccountsChanged)
                provider.removeListener('chainChanged', handleChainChanged)
                provider.removeListener('disconnect', handleDisconnect)
              }
            }
          }
        }, [provider, disconnect])
      
    const chainData = getChainData(chainId)


    //useState<{ username: string }>()
    // const [errors, setErrors] = useState({})

    // const initialFormState = {
    //     username: '',
    //     password: ''
    // };

    // const [registration, setRegistration] = useState(initialFormState);

    // const validate = () => {
    //     let temp = { ...errors };
    //     if ('username' in registration)
    //         temp.username = registration.username ? '' : 'This field is required.';
    //     // if ('email' in registration)
    //     //   temp.email = /$^|.+@.+..+/.test(registration.email)
    //     //     ? ''
    //     //     : 'Email is not valid.';
    //     if ('password' in registration)
    //         temp.password =
    //             registration.password.length != 0 ? '' : 'This field is required.';
    //     setErrors({
    //         ...temp,
    //     });

    //     if (registration) return Object.values(temp).every((x) => x == '');
    // };

    // const handleChange = (e) => {
    //     setRegistration({
    //         ...registration,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const validate = (fieldValues = values) => {
    //     let temp = { ...errors }
    //     if ('username' in fieldValues)
    //         temp.username = fieldValues.username ? "" : "This field is required."
    //     if ('password' in fieldValues)
    //         temp.password = fieldValues.password ? "" : "This field is required."

    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldValues == values)
    //         return Object.values(temp).every(x => x == "")
    // }

    let error = ''
    let invalidMessage = ''
    let isValid = true

    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setErrors({ username: '', password: '' })
        // if (e.target.value.length <= 0) {
        //     isValid = false
        //     invalidMessage = "Invalid username."
        //     setErrors({ username: '', password: invalidMessage })
        // }
        setUsernameState(e.target.value)
        //     const checkedZeroTextLength = e.target.value.length === 0;
        // if (checkedZeroTextLength) {
        //   error = "The input has exceeded the maximum number of characters";
        // } else {
        //   error = '';
        // }
        // temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        // let reg = new RegExp(/^[a-zA-Z0-9]{3,20}$/).test(e.target.value)
        // if (!reg || e.target.value.length <= 0) {
        //     setErrors({ username: 'Username must include at least 3 characters.', password: '' })
        // }

        // setUsernameState(e.target.value)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setErrors({ username: '', password: '' })
        // if (e.target.value.length <= 0) {
        //     isValid = false
        //     invalidMessage = "Invalid password."
        //     setErrors({ username: '', password: invalidMessage })
        // }
        setPasswordState(e.target.value)

        // let reg = new RegExp(/^[a-zA-Z0-9]{0}$/).test(e.target.value)
        // if (!reg || e.target.value.length <= 0) {
        //     setErrors({ username: '', password: 'Password must be entered.' })
        // }

        // setPasswordState(e.target.value)
    }

    const onLogin = (event: React.FormEvent) => {
        event.preventDefault()
        // const { username, password } = event.target
        console.log(usernameState)
        // Call ur function here
        loadBlockchainData("login", [usernameState, passwordState]).then(result => 
           
            { 
          
                navigate("../Newsfeed", { replace: true }); 
            }).catch((err) => {
                if(err.message.includes('Incorenct username or password')){
                        setErrorState("This user does not exist")
                }else{
                 console.log(err)
                }
            });
    }

    return (

        <>
            <form onSubmit={onLogin}>

                <Container maxWidth="sm" sx={{ mt: 4, pt: 2 }} >
                    <Typography variant="h5" component="div" align='center' >
                        Login
                    </Typography>
                    <Box
                        margin="auto"
                        display="flex"
                        component="img"
                        sx={{
                            height: 235,
                            width: 350,
                            maxHeight: { xs: 235, md: 170 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        src={loginImage}
                    />
                    <Box
                        component="div"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        // noValidate

                    >
                        <TextField id="username" label="Username" type="username" name="username" variant="standard" fullWidth={true} onChange={handleChangeUsername}
                            // error={Boolean(errors?.username)}
                            // helperText={(errors?.username)}
                            required
                        // error={errors.username}
                        // helperText={errors.username}
                        // error={this.state.username === ""}
                        // helperText={this.state.username === "" ? 'Empty field!' : ' '}
                        // helperText={error ? "Username is required." : ""}
                        // error={Boolean(error)}
                        />
                        <TextField id="password" label="Password" type="password" name="password" variant="standard" fullWidth={true} onChange={handleChangePassword}
                            // error={Boolean(errors?.password)}
                            // helperText={(errors?.password)}
                            required
                        // error={errors.password}
                        // helperText={errors.password}
                        />

                        <br></br>

                        <Box display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <Button type="submit" variant="contained"
                            //  component="span"
                                // onClick={() => {
                                //     loadBlockchainData("login", [usernameState, passwordState,]).then(result => { navigate("../Newsfeed", { replace: true }); })
                                // }}
                                >
                                Sign In
                            </Button>
                        
                        </Box>

                    </Box>
                    <Typography variant="h6" component="div" align='center' color = 'red' >
                        {error1}
                    </Typography>

                    <Box display="flex"
                        justifyContent="center"
                        sx={{ marginTop: 2}}>
                        
                        <Typography>New to SeniorProject? 
                            <Button variant="text" 
                                onClick={() => {
                                    navigate("../register")
                                }}>
                                Create an account.
                            </Button>
                        </Typography>
                        
                    </Box>
                    <Box>

                    {web3Provider ? (
                    <Button onClick={disconnect}>
                     Disconnect
                    </Button>
                    ) : (
                    <Button onClick={connect}>
                        Connect with MetaMask
                        </Button>
                         )}
                   

                    </Box>
                </Container>
            </form>
        </>
    )
}
export default Login

function showError() {
    throw new Error("Function not implemented.");
}

