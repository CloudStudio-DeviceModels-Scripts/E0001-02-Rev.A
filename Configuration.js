function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints) 
{
var e1 = endpoints.addEndpoint("1", "Hora 1c", endpointType.genericSensor);
e1.variableTypeId = 1314;
var e2 = endpoints.addEndpoint("2", "Hora 2c", endpointType.genericSensor);
e2.variableTypeId = 1314;
var e3 = endpoints.addEndpoint("3", "Hora 3c", endpointType.genericSensor);
e3.variableTypeId = 1314;
var e4 = endpoints.addEndpoint("4", "Hora 4c", endpointType.genericSensor);
e4.variableTypeId = 1314;
var e5 = endpoints.addEndpoint("5", "Hora 5c", endpointType.genericSensor);
e5.variableTypeId = 1314;
var e6 = endpoints.addEndpoint("6", "Hora 6c", endpointType.genericSensor);
e6.variableTypeId = 1314;
var e7 = endpoints.addEndpoint("7", "Hora 7c", endpointType.genericSensor);
e7.variableTypeId = 1314;
var e8 = endpoints.addEndpoint("8", "Hora 8c", endpointType.genericSensor);
e8.variableTypeId = 1314;
var e9 = endpoints.addEndpoint("9", "Hora 9c", endpointType.genericSensor);
e9.variableTypeId = 1314;
var e10 = endpoints.addEndpoint("10", "Hora 10c", endpointType.genericSensor);
e10.variableTypeId = 1314;
var e11 = endpoints.addEndpoint("11", "Hora 11c", endpointType.genericSensor);
e11.variableTypeId = 1314;
var e12 = endpoints.addEndpoint("12", "Hora 12c", endpointType.genericSensor);
e12.variableTypeId = 1314;
var e13 = endpoints.addEndpoint("13", "Hora 13c", endpointType.genericSensor);
e13.variableTypeId = 1314;
var e14 = endpoints.addEndpoint("14", "Hora 14c", endpointType.genericSensor);
e14.variableTypeId = 1314;
var e15 = endpoints.addEndpoint("15", "Hora 15c", endpointType.genericSensor);
e15.variableTypeId = 1314;
var e16 = endpoints.addEndpoint("16", "Hora 16c", endpointType.genericSensor);
e16.variableTypeId = 1314;
var e17 = endpoints.addEndpoint("17", "Hora 17c", endpointType.genericSensor);
e17.variableTypeId = 1314;
var e18 = endpoints.addEndpoint("18", "Hora 18c", endpointType.genericSensor);
e18.variableTypeId = 1314;
var e19 = endpoints.addEndpoint("19", "Hora 19c", endpointType.genericSensor);
e19.variableTypeId = 1314;
var e20 = endpoints.addEndpoint("20", "Hora 20c", endpointType.genericSensor);
e20.variableTypeId = 1314;
var e21 = endpoints.addEndpoint("21", "Hora 21c", endpointType.genericSensor);
e21.variableTypeId = 1314;
var e22 = endpoints.addEndpoint("22", "Hora 22c", endpointType.genericSensor);
e22.variableTypeId = 1314;
var e23 = endpoints.addEndpoint("23", "Hora 23c", endpointType.genericSensor);
e23.variableTypeId = 1314;
var e24 = endpoints.addEndpoint("24", "Hora 24c", endpointType.genericSensor);
e24.variableTypeId = 1314;
var e25 = endpoints.addEndpoint("25", "Cloro_ini 25", endpointType.genericSensor);
e25.variableTypeId = 1318;
var e26 = endpoints.addEndpoint("26", "Cloro_ini 26", endpointType.genericSensor);
e26.variableTypeId = 1318;
var e27 = endpoints.addEndpoint("27", "Cloro_ini 27", endpointType.genericSensor);
e27.variableTypeId = 1318;
var e28 = endpoints.addEndpoint("28", "Cloro_ini 28", endpointType.genericSensor);
e28.variableTypeId = 1318;
var e29 = endpoints.addEndpoint("29", "Cloro_ini 29", endpointType.genericSensor);
e29.variableTypeId = 1318;
var e30 = endpoints.addEndpoint("30", "Cloro_ini 30", endpointType.genericSensor);
e30.variableTypeId = 1318;
var e31 = endpoints.addEndpoint("31", "Cloro_ini 31", endpointType.genericSensor);
e31.variableTypeId = 1318;
var e32 = endpoints.addEndpoint("32", "Cloro_ini 32", endpointType.genericSensor);
e32.variableTypeId = 1318;
var e33 = endpoints.addEndpoint("33", "Cloro_ini 33", endpointType.genericSensor);
e33.variableTypeId = 1318;
var e34 = endpoints.addEndpoint("34", "Cloro_ini 34", endpointType.genericSensor);
e34.variableTypeId = 1318;
var e35 = endpoints.addEndpoint("35", "Cloro_ini 35", endpointType.genericSensor);
e35.variableTypeId = 1318;
var e36 = endpoints.addEndpoint("36", "Cloro_ini 36", endpointType.genericSensor);
e36.variableTypeId = 1318;
var e37 = endpoints.addEndpoint("37", "Cloro_ini 37", endpointType.genericSensor);
e37.variableTypeId = 1318;
var e38 = endpoints.addEndpoint("38", "Cloro_ini 38", endpointType.genericSensor);
e38.variableTypeId = 1318;
var e39 = endpoints.addEndpoint("39", "Cloro_ini 39", endpointType.genericSensor);
e39.variableTypeId = 1318;
var e40 = endpoints.addEndpoint("40", "Cloro_ini 40", endpointType.genericSensor);
e40.variableTypeId = 1318;
var e41 = endpoints.addEndpoint("41", "Cloro_ini 41", endpointType.genericSensor);
e41.variableTypeId = 1318;
var e42 = endpoints.addEndpoint("42", "Cloro_ini 42", endpointType.genericSensor);
e42.variableTypeId = 1318;
var e43 = endpoints.addEndpoint("43", "Cloro_ini 43", endpointType.genericSensor);
e43.variableTypeId = 1318;
var e44 = endpoints.addEndpoint("44", "Cloro_ini 44", endpointType.genericSensor);
e44.variableTypeId = 1318;
var e45 = endpoints.addEndpoint("45", "Cloro_ini 45", endpointType.genericSensor);
e45.variableTypeId = 1318;
var e46 = endpoints.addEndpoint("46", "Cloro_ini 46", endpointType.genericSensor);
e46.variableTypeId = 1318;
var e47 = endpoints.addEndpoint("47", "Cloro_ini 47", endpointType.genericSensor);
e47.variableTypeId = 1318;
var e48 = endpoints.addEndpoint("48", "Cloro_ini 48", endpointType.genericSensor);
e48.variableTypeId = 1318;

var e49 = endpoints.addEndpoint("49", "Cloro_fin 49", endpointType.genericSensor);
e49.variableTypeId = 1318;
var e50 = endpoints.addEndpoint("50", "Cloro_fin 50", endpointType.genericSensor);
e50.variableTypeId = 1318;
var e51 = endpoints.addEndpoint("51", "Cloro_fin 51", endpointType.genericSensor);
e51.variableTypeId = 1318;
var e52 = endpoints.addEndpoint("52", "Cloro_fin 52", endpointType.genericSensor);
e52.variableTypeId = 1318;
var e53 = endpoints.addEndpoint("53", "Cloro_fin 53", endpointType.genericSensor);
e53.variableTypeId = 1318;
var e54 = endpoints.addEndpoint("54", "Cloro_fin 54", endpointType.genericSensor);
e54.variableTypeId = 1318;
var e55 = endpoints.addEndpoint("55", "Cloro_fin 55", endpointType.genericSensor);
e55.variableTypeId = 1318;
var e56 = endpoints.addEndpoint("56", "Cloro_fin 56", endpointType.genericSensor);
e56.variableTypeId = 1318;
var e57 = endpoints.addEndpoint("57", "Cloro_fin 57", endpointType.genericSensor);
e57.variableTypeId = 1318;
var e58 = endpoints.addEndpoint("58", "Cloro_fin 58", endpointType.genericSensor);
e58.variableTypeId = 1318;
var e59 = endpoints.addEndpoint("59", "Cloro_fin 59", endpointType.genericSensor);
e59.variableTypeId = 1318;
var e60 = endpoints.addEndpoint("60", "Cloro_fin 60", endpointType.genericSensor);
e60.variableTypeId = 1318;
var e61 = endpoints.addEndpoint("61", "Cloro_fin 61", endpointType.genericSensor);
e61.variableTypeId = 1318;
var e62 = endpoints.addEndpoint("62", "Cloro_fin 62", endpointType.genericSensor);
e62.variableTypeId = 1318;
var e63 = endpoints.addEndpoint("63", "Cloro_fin 63", endpointType.genericSensor);
e63.variableTypeId = 1318;
var e64 = endpoints.addEndpoint("64", "Cloro_fin 64", endpointType.genericSensor);
e64.variableTypeId = 1318;
var e65 = endpoints.addEndpoint("65", "Cloro_fin 65", endpointType.genericSensor);
e65.variableTypeId = 1318;
var e66 = endpoints.addEndpoint("66", "Cloro_fin 66", endpointType.genericSensor);
e66.variableTypeId = 1318;
var e67 = endpoints.addEndpoint("67", "Cloro_fin 67", endpointType.genericSensor);
e67.variableTypeId = 1318;
var e68 = endpoints.addEndpoint("68", "Cloro_fin 68", endpointType.genericSensor);
e68.variableTypeId = 1318;
var e69 = endpoints.addEndpoint("69", "Cloro_fin 69", endpointType.genericSensor);
e69.variableTypeId = 1318;
var e70 = endpoints.addEndpoint("70", "Cloro_fin 70", endpointType.genericSensor);
e70.variableTypeId = 1318;
var e71 = endpoints.addEndpoint("71", "Cloro_fin 71", endpointType.genericSensor);
e71.variableTypeId = 1318;
var e72 = endpoints.addEndpoint("72", "Cloro_fin 72", endpointType.genericSensor);
e72.variableTypeId = 1318;

}


function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
