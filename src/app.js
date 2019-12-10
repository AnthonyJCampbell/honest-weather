import config from './config';

import express from 'express';

async function startServer() {
    const app = express();

    /**
     * A little hack here
     * Import/Export can only be used in 'top-level code'
     * Well, at least in node 10 without babel and at the time of writing
     * So we are using good old require.
     **/
    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, err => {
        if (err) {
            Logger.error(err);
            process.exit(1);
            return;
        }
        Logger.info(`
        ################################################
        🛡️   Server running on port ${config.port}     🛡️ 
        ################################################
      `);
    });
}

startServer();


server.get('/', (req, res) => {
    res.status(200).json({ "message": "Server's alive!" })
})

server.listen(port, () => {
    console.log(`\n---  ---`)
})