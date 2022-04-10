export const SMART_CONTRACT_ADDRESS = '0x29c7EaF351780559edbE817c8CCb6BDb1cFbA704'

export const SMART_CONTRACT_ABI = [{
        "inputs": [{
                "internalType": "address",
                "name": "_userAdress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_degreeCatrgory",
                "type": "string"
            }
        ],
        "name": "addDegree",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
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
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
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
        "inputs": [{
            "internalType": "address",
            "name": "_userAdress",
            "type": "address"
        }],
        "name": "approveUser",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
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
                "name": "_biography",
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
        "name": "editUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
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
            },
            {
                "internalType": "string",
                "name": "_documnetLink",
                "type": "string"
            }
        ],
        "name": "register",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "email",
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
                    "name": "biography",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "degree",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "profession",
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
            "internalType": "struct Structs.User",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_userAdress",
            "type": "address"
        }],
        "name": "rejectUser",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "_userAdress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_linkToDocument",
                "type": "string"
            }
        ],
        "name": "requestAuthentication",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "uint256",
                "name": "paperId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reviewId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "sendReaction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_authorAddress",
            "type": "address"
        }],
        "name": "getAuthoredPapers",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
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
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
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
                            "internalType": "uint256",
                            "name": "likes",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dislikes",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "content",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "reviewId",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Structs.Review[]",
                    "name": "paperReviews",
                    "type": "tuple[]"
                }
            ],
            "internalType": "struct Structs.Paper[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getHello",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_paperID",
            "type": "uint256"
        }],
        "name": "getPaper",
        "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_paperID",
            "type": "uint256"
        }],
        "name": "getPaperReviews",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
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
                    "internalType": "uint256",
                    "name": "likes",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "dislikes",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "reviewId",
                    "type": "uint256"
                }
            ],
            "internalType": "struct Structs.Review[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPapers",
        "outputs": [{
            "components": [{
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
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
                },
                {
                    "components": [{
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
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
                            "internalType": "uint256",
                            "name": "likes",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dislikes",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "content",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "reviewId",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Structs.Review[]",
                    "name": "paperReviews",
                    "type": "tuple[]"
                }
            ],
            "internalType": "struct Structs.Paper[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUnaprovedUsers",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "email",
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
                    "name": "biography",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "degree",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "profession",
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
            "internalType": "struct Structs.User[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUsers",
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "email",
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
                    "name": "biography",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "degree",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "profession",
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
            "internalType": "struct Structs.User[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
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
        "outputs": [{
            "components": [{
                    "internalType": "string",
                    "name": "email",
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
                    "name": "biography",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "degree",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "profession",
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
            "internalType": "struct Structs.User",
            "name": "",
            "type": "tuple"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "users",
        "outputs": [{
                "internalType": "string",
                "name": "email",
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
                "name": "biography",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "degree",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "profession",
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