const ModiusLogoPlugin = {
    components: {
        Logo: () => React.createElement('img', {
            alt: "Modius Logo",
            height: "40",
            src: "modius-logo-transparent.png"
        })
    }
};

window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      ModiusLogoPlugin
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
