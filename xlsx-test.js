const config = {
    filename: 'test-file',
    sheet: {
        data: [
            [
                {
                    value: 'ABC',
                    type: 'string',
                    style: 'bgColor="00FCF305"'
                },
                {
                    value: 'DEF',
                    type: 'string'
                }
            ]
        ]
    }
}

zipcelx(config);