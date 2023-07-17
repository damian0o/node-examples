module.exports = {
  apps : [
      {
        name: "express-cluster",
        script: "./index.js",
        instances: 4,
        exec_mode: "cluster",
        watch: true,
	log_file: "./express-cluster.log",
	combine_logs: true,
        increment_var : 'PORT',
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        }
      }
  ]
}
