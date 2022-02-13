export const SMART_CONTRACT_ADDRESS = '0x7d28858a0e87b0a26A93830065a1f2BC47716906'

export const SMART_CONTRACT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_paperID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_authorHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_paperAbstract",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_minuteRead",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_authorAddress",
				"type": "address"
			}
		],
		"name": "addPaper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_authorAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_paperID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_reviewContent",
				"type": "string"
			}
		],
		"name": "addReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHello",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userEmial",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_passwordHash",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "login",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userEmail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "passwordHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "biografy",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "confirmed",
						"type": "bool"
					},
					{
						"internalType": "string[]",
						"name": "postedPapers",
						"type": "string[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "authorHash",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "paperReviwed",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "reviewContent",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "reviewId",
								"type": "uint256"
							}
						],
						"internalType": "struct Main.Review[]",
						"name": "writtenReviews",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Main.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "papers",
		"outputs": [
			{
				"internalType": "string",
				"name": "authorHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paperAbstract",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "minuteRead",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "authorAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userEmial",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_biografy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_passwordHash",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "register",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userEmail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "passwordHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "biografy",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "confirmed",
						"type": "bool"
					},
					{
						"internalType": "string[]",
						"name": "postedPapers",
						"type": "string[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "authorHash",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "paperReviwed",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "reviewContent",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "reviewId",
								"type": "uint256"
							}
						],
						"internalType": "struct Main.Review[]",
						"name": "writtenReviews",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Main.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "userEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "passwordHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "biografy",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "confirmed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]