const config = {
    filename: 'test-file',
    sheet: {
        data: [
            [
                {
                    value: 'ABC',
                    type: 'string',
                    style: 'bgColor=\"00FCF305\"'
                },
                {
                    value: 'DEF',
                    type: 'string'
                },               
                {
                    value: 'GHI',
                    type: 'string',
                    style: 'bgColor=\"00FCF305\"'
                },
                {
                    value: 'JKL',
                    type: 'string'
                }, 
                {
                    value: 'MNO',
                    type: 'string',
                    style: 'bgColor=\"00FCF305\"'
                }  
            ],
            [
                {
                    value: 'PQR',
                    type: 'string'
                },
                {
                    value: 'STU',
                    type: 'string',
                    style: 'bgColor=\"00FCF305\"'
                },               
                {
                    value: 'VWX',
                    type: 'string',
                },
                {
                    value: 'YZA',
                    type: 'string',
                    style: 'bgColor=\"00FCF305\"'
                }, 
                {
                    value: 'BCD',
                    type: 'string',
                }  
            ],
        ]
    }
}

zipcelx(config);