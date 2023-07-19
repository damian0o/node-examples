- Node should be installed.

Test parameters without PM2

    # default port should be used 3000
    node index.js

    # env variable should be pass to node js
    PORT=3001 node index.js

    # env variable should be overwrite by argument
    PORT=3001 node index.js 3002

    # arg should be used
    node index.js 3005

- PM2 should be installed (npm install pm2 -g)


    pm2 start
    pm2 logs

Another approach

    PORT=3001 pm2 start index.js --env PORT --name test1
