const database = {
  admin: {
    password: "admin1234",
    files: [
      {
        code: "C-1",
        product: "TRACK-NEW",
        receipt: "#",
        download: [
          {
            url: "https://drive.google.com/uc?id=1G9b0dEoZLKyLENqOo61dFz6dmk9HYSxC&export=download",
            name: "Versión Original",
          },
          {
            url: "https://drive.google.com/uc?id=1anMjjCu9XGcoUuA96Y3EGL7tMYALEGBE&export=download",
            name: "Remix con Ganya",
          },
        ],
      },
      {
        code: "C-2",
        product: "foto",
        receipt: "#",
        download: [
          {
            url: "https://drive.google.com/uc?id=1SPl19_hiGkAt-k_sr3P_MS-dYXse01Q-",
            name: "Foto en Alta Resolución",
          },
        ],
      },
    ],
    royalties: {
      id: "ART-2023-001",
      genre: "Pop, Rock",
      balance: 1250.75,
      paymentMethod: {
        type: "bank",
        accountNumber: "1234567890",
        bankName: "Banco Nacional",
      },
      monthlyData: [
        {
          month: "Enero",
          amount: 320.5,
          details: [
            { title: "Spotify", streams: 15000, amount: 150.0 },
            { title: "Apple Music", streams: 8500, amount: 85.0 },
            { title: "YouTube", views: 25000, amount: 85.5 },
          ],
        },
        {
          month: "Febrero",
          amount: 410.25,
          details: [
            { title: "Spotify", streams: 18000, amount: 180.0 },
            { title: "Apple Music", streams: 12000, amount: 120.0 },
            { title: "YouTube", views: 32500, amount: 110.25 },
          ],
        },
        {
          month: "Marzo",
          amount: 520.0,
          details: [
            { title: "Spotify", streams: 22000, amount: 220.0 },
            { title: "Apple Music", streams: 15000, amount: 150.0 },
            { title: "YouTube", views: 44000, amount: 150.0 },
          ],
        },
        { month: "Abril", amount: 0, details: [] },
        { month: "Mayo", amount: 0, details: [] },
        { month: "Junio", amount: 0, details: [] },
      ],
      paymentHistory: [
        { date: "15/03/2023", concept: "Pago de regalías - Enero", amount: 320.5, status: "paid" },
        { date: "18/03/2023", concept: "Pago de regalías - Febrero", amount: 410.25, status: "paid" },
        { date: "01/04/2023", concept: "Pago de regalías - Marzo", amount: 520.0, status: "processing" },
      ],
    },
  },
  xdanyel: {
    password: "anyel",
    files: [
      {
        code: "C-1",
        product: "AMIGO",
        receipt: "#",
        download: [
          {
            name: "WAV",
            url: "https://docs.google.com/uc?export=download&id=1BFaLH7uBpqD62O89NQQ-WnH55eve-pTw",
          },
        ],
      },
    ],
    royalties: {
      id: "ART-2023-002",
      genre: "Urbano, Trap",
      balance: 2340.6,
      paymentMethod: {
        type: "paypal",
        email: "xdanyel@example.com",
      },
      monthlyData: [
        {
          month: "Enero",
          amount: 450.2,
          details: [
            { title: "Spotify", streams: 20000, amount: 200.0 },
            { title: "Apple Music", streams: 12000, amount: 120.0 },
            { title: "YouTube", views: 40000, amount: 130.2 },
          ],
        },
        {
          month: "Febrero",
          amount: 580.4,
          details: [
            { title: "Spotify", streams: 25000, amount: 250.0 },
            { title: "Apple Music", streams: 15000, amount: 150.0 },
            { title: "YouTube", views: 55000, amount: 180.4 },
          ],
        },
        {
          month: "Marzo",
          amount: 710.0,
          details: [
            { title: "Spotify", streams: 30000, amount: 300.0 },
            { title: "Apple Music", streams: 18000, amount: 180.0 },
            { title: "YouTube", views: 70000, amount: 230.0 },
          ],
        },
        {
          month: "Abril",
          amount: 600.0,
          details: [
            { title: "Spotify", streams: 28000, amount: 280.0 },
            { title: "Apple Music", streams: 16000, amount: 160.0 },
            { title: "YouTube", views: 50000, amount: 160.0 },
          ],
        },
        { month: "Mayo", amount: 0, details: [] },
        { month: "Junio", amount: 0, details: [] },
      ],
      paymentHistory: [
        { date: "10/02/2023", concept: "Pago de regalías - Enero", amount: 450.2, status: "paid" },
        { date: "12/03/2023", concept: "Pago de regalías - Febrero", amount: 580.4, status: "paid" },
        { date: "15/04/2023", concept: "Pago de regalías - Marzo", amount: 710.0, status: "paid" },
        { date: "05/05/2023", concept: "Pago de regalías - Abril", amount: 600.0, status: "pending" },
      ],
    },
  },
}
