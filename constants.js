

exports.SSL_options = {
    key: require("fs").readFileSync("./privkey.pem"),
    cert: require("fs").readFileSync("./fullchain.pem")
}

exports.PORT_SSL = 41443

exports.STATIC_PAGES = "./www"