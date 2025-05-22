var database = {
    "admin": {
        "password": "admin123",
        "files": [
            {
                "code": "ADM001",
                "product": "Panel de Administración",
                "receipt": "https://example.com/receipts/adm001.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/admin_panel.zip",
                        "name": "Panel de Administración v1.0"
                    },
                    {
                        "url": "https://example.com/downloads/admin_docs.pdf",
                        "name": "Documentación del Panel"
                    }
                ]
            },
            {
                "code": "ADM002",
                "product": "Herramientas de Gestión",
                "receipt": "https://example.com/receipts/adm002.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/management_tools.zip",
                        "name": "Herramientas de Gestión v2.1"
                    }
                ]
            }
        ],
        "royalties": {
            "id": "ADM-2023-001",
            "genre": "Administración",
            "balance": 1250.75,
            "paymentMethod": {
                "type": "bank",
                "accountNumber": "1234567890",
                "bankName": "Banco Nacional"
            },
            "monthlyData": [
                {
                    "month": "Enero",
                    "amount": 450.25,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 12500,
                            "amount": 250.75
                        },
                        {
                            "title": "YouTube",
                            "views": 35000,
                            "amount": 199.50
                        }
                    ]
                },
                {
                    "month": "Febrero",
                    "amount": 520.50,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 14200,
                            "amount": 285.30
                        },
                        {
                            "title": "YouTube",
                            "views": 42000,
                            "amount": 235.20
                        }
                    ]
                },
                {
                    "month": "Marzo",
                    "amount": 280.00,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 8500,
                            "amount": 170.00
                        },
                        {
                            "title": "YouTube",
                            "views": 19500,
                            "amount": 110.00
                        }
                    ]
                }
            ],
            "paymentHistory": [
                {
                    "date": "15/01/2023",
                    "concept": "Pago de regalías - Diciembre 2022",
                    "amount": 375.50,
                    "status": "paid"
                },
                {
                    "date": "18/02/2023",
                    "concept": "Pago de regalías - Enero 2023",
                    "amount": 450.25,
                    "status": "paid"
                },
                {
                    "date": "20/03/2023",
                    "concept": "Pago de regalías - Febrero 2023",
                    "amount": 520.50,
                    "status": "processing"
                }
            ]
        }
    },
    "superadmin": {
        "password": "super123",
        "files": [
            {
                "code": "SUP001",
                "product": "Sistema Completo",
                "receipt": "https://example.com/receipts/sup001.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/full_system.zip",
                        "name": "Sistema Completo v3.0"
                    },
                    {
                        "url": "https://example.com/downloads/system_docs.pdf",
                        "name": "Documentación del Sistema"
                    }
                ]
            }
        ],
        "royalties": {
            "id": "SUP-2023-001",
            "genre": "Producción",
            "balance": 2350.80,
            "paymentMethod": {
                "type": "paypal",
                "email": "superadmin@example.com"
            },
            "monthlyData": [
                {
                    "month": "Enero",
                    "amount": 780.30,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 25000,
                            "amount": 500.50
                        },
                        {
                            "title": "Apple Music",
                            "streams": 18000,
                            "amount": 279.80
                        }
                    ]
                },
                {
                    "month": "Febrero",
                    "amount": 950.50,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 30000,
                            "amount": 600.00
                        },
                        {
                            "title": "Apple Music",
                            "streams": 22500,
                            "amount": 350.50
                        }
                    ]
                },
                {
                    "month": "Marzo",
                    "amount": 620.00,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 18500,
                            "amount": 370.00
                        },
                        {
                            "title": "Apple Music",
                            "streams": 16000,
                            "amount": 250.00
                        }
                    ]
                }
            ],
            "paymentHistory": [
                {
                    "date": "10/01/2023",
                    "concept": "Pago de regalías - Diciembre 2022",
                    "amount": 650.75,
                    "status": "paid"
                },
                {
                    "date": "12/02/2023",
                    "concept": "Pago de regalías - Enero 2023",
                    "amount": 780.30,
                    "status": "paid"
                },
                {
                    "date": "15/03/2023",
                    "concept": "Pago de regalías - Febrero 2023",
                    "amount": 950.50,
                    "status": "pending"
                }
            ]
        }
    },
    "usuario1": {
        "password": "user123",
        "files": [
            {
                "code": "USR001",
                "product": "Curso Básico",
                "receipt": "https://example.com/receipts/usr001.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/basic_course.zip",
                        "name": "Curso Básico v1.0"
                    }
                ]
            }
        ],
        "royalties": {
            "id": "USR-2023-001",
            "genre": "Hip Hop",
            "balance": 520.25,
            "paymentMethod": {
                "type": "bank",
                "accountNumber": "9876543210",
                "bankName": "Banco Universal"
            },
            "monthlyData": [
                {
                    "month": "Enero",
                    "amount": 180.50,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 5000,
                            "amount": 100.25
                        },
                        {
                            "title": "YouTube",
                            "views": 15000,
                            "amount": 80.25
                        }
                    ]
                },
                {
                    "month": "Febrero",
                    "amount": 220.75,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 6200,
                            "amount": 125.50
                        },
                        {
                            "title": "YouTube",
                            "views": 18000,
                            "amount": 95.25
                        }
                    ]
                },
                {
                    "month": "Marzo",
                    "amount": 119.00,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 3500,
                            "amount": 70.00
                        },
                        {
                            "title": "YouTube",
                            "views": 9000,
                            "amount": 49.00
                        }
                    ]
                }
            ],
            "paymentHistory": [
                {
                    "date": "20/01/2023",
                    "concept": "Pago de regalías - Diciembre 2022",
                    "amount": 150.25,
                    "status": "paid"
                },
                {
                    "date": "22/02/2023",
                    "concept": "Pago de regalías - Enero 2023",
                    "amount": 180.50,
                    "status": "paid"
                }
            ]
        }
    },
    "usuario2": {
        "password": "user456",
        "files": [
            {
                "code": "USR002",
                "product": "Curso Avanzado",
                "receipt": "https://example.com/receipts/usr002.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/advanced_course.zip",
                        "name": "Curso Avanzado v2.0"
                    },
                    {
                        "url": "https://example.com/downloads/advanced_resources.pdf",
                        "name": "Recursos Adicionales"
                    }
                ]
            }
        ],
        "royalties": {
            "id": "USR-2023-002",
            "genre": "Pop",
            "balance": 750.60,
            "paymentMethod": {
                "type": "crypto",
                "wallet": "0x1a2b3c4d5e6f7g8h9i0j"
            },
            "monthlyData": [
                {
                    "month": "Enero",
                    "amount": 250.20,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 7500,
                            "amount": 150.75
                        },
                        {
                            "title": "Apple Music",
                            "streams": 6000,
                            "amount": 99.45
                        }
                    ]
                },
                {
                    "month": "Febrero",
                    "amount": 320.40,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 9800,
                            "amount": 196.80
                        },
                        {
                            "title": "Apple Music",
                            "streams": 7500,
                            "amount": 123.60
                        }
                    ]
                },
                {
                    "month": "Marzo",
                    "amount": 180.00,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 5500,
                            "amount": 110.00
                        },
                        {
                            "title": "Apple Music",
                            "streams": 4200,
                            "amount": 70.00
                        }
                    ]
                }
            ],
            "paymentHistory": [
                {
                    "date": "25/01/2023",
                    "concept": "Pago de regalías - Diciembre 2022",
                    "amount": 200.50,
                    "status": "paid"
                },
                {
                    "date": "28/02/2023",
                    "concept": "Pago de regalías - Enero 2023",
                    "amount": 250.20,
                    "status": "paid"
                },
                {
                    "date": "05/04/2023",
                    "concept": "Pago de regalías - Febrero 2023",
                    "amount": 320.40,
                    "status": "pending"
                }
            ]
        }
    },
    "artista1": {
        "password": "art123",
        "files": [
            {
                "code": "ART001",
                "product": "Pack de Beats",
                "receipt": "https://example.com/receipts/art001.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/beats_pack.zip",
                        "name": "Pack de Beats Vol. 1"
                    }
                ]
            }
        ],
        "royalties": {
            "id": "ART-2023-001",
            "genre": "Trap",
            "balance": 1850.30,
            "paymentMethod": {
                "type": "paypal",
                "email": "artista1@example.com"
            },
            "monthlyData": [
                {
                    "month": "Enero",
                    "amount": 580.75,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 18000,
                            "amount": 360.50
                        },
                        {
                            "title": "YouTube",
                            "views": 45000,
                            "amount": 220.25
                        }
                    ]
                },
                {
                    "month": "Febrero",
                    "amount": 720.55,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 22500,
                            "amount": 450.80
                        },
                        {
                            "title": "YouTube",
                            "views": 55000,
                            "amount": 269.75
                        }
                    ]
                },
                {
                    "month": "Marzo",
                    "amount": 549.00,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 16500,
                            "amount": 330.00
                        },
                        {
                            "title": "YouTube",
                            "views": 44500,
                            "amount": 219.00
                        }
                    ]
                }
            ],
            "paymentHistory": [
                {
                    "date": "05/01/2023",
                    "concept": "Pago de regalías - Diciembre 2022",
                    "amount": 490.25,
                    "status": "paid"
                },
                {
                    "date": "08/02/2023",
                    "concept": "Pago de regalías - Enero 2023",
                    "amount": 580.75,
                    "status": "paid"
                },
                {
                    "date": "10/03/2023",
                    "concept": "Pago de regalías - Febrero 2023",
                    "amount": 720.55,
                    "status": "processing"
                }
            ]
        }
    },
    "productor1": {
        "password": "prod123",
        "files": [
            {
                "code": "PRD001",
                "product": "Samples Premium",
                "receipt": "https://example.com/receipts/prd001.pdf",
                "download": [
                    {
                        "url": "https://example.com/downloads/premium_samples.zip",
                        "name": "Samples Premium Pack"
                    },
                    {
                        "url": "https://example.com/downloads/bonus_samples.zip",
                        "name": "Samples Bonus Pack"
                    }
                ]
            }
        ],
        "royalties": {
            "id": "PRD-2023-001",
            "genre": "Electrónica",
            "balance": 2150.45,
            "paymentMethod": {
                "type": "bank",
                "accountNumber": "5678901234",
                "bankName": "Banco Internacional"
            },
            "monthlyData": [
                {
                    "month": "Enero",
                    "amount": 680.25,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 21000,
                            "amount": 420.50
                        },
                        {
                            "title": "Apple Music",
                            "streams": 16500,
                            "amount": 259.75
                        }
                    ]
                },
                {
                    "month": "Febrero",
                    "amount": 850.20,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 26500,
                            "amount": 530.00
                        },
                        {
                            "title": "Apple Music",
                            "streams": 20000,
                            "amount": 320.20
                        }
                    ]
                },
                {
                    "month": "Marzo",
                    "amount": 620.00,
                    "details": [
                        {
                            "title": "Spotify",
                            "streams": 19000,
                            "amount": 380.00
                        },
                        {
                            "title": "Apple Music",
                            "streams": 15000,
                            "amount": 240.00
                        }
                    ]
                }
            ],
            "paymentHistory": [
                {
                    "date": "03/01/2023",
                    "concept": "Pago de regalías - Diciembre 2022",
                    "amount": 550.75,
                    "status": "paid"
                },
                {
                    "date": "05/02/2023",
                    "concept": "Pago de regalías - Enero 2023",
                    "amount": 680.25,
                    "status": "paid"
                },
                {
                    "date": "08/03/2023",
                    "concept": "Pago de regalías - Febrero 2023",
                    "amount": 850.20,
                    "status": "processing"
                }
            ]
        }
    }
};