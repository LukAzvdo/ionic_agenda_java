module.exports = {
    async headers(){
        return [
            {
                source: '/:path*',
                headers: [
                    {key: 'Access-Control-Allow-Credentials', value: 'true'},
                    {key: 'Access-Control-Allow-Origin', value: '*'},
                    {key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,OPTIONS,PATCH,DELETE,POST,PUT'},
                    {key: 'Access-Control-Allow-Headres', value: 'X-CSRF-Token, X-Requested-With,Accept,Accept-Version,Content-Lenght,Content-MD5,Content-Type,Date,X-Api-Version,Authorization'}
                ]
            }
        ]
    }
}