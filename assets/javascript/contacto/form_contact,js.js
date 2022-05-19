
						JotForm.init(function(){
					if (JotForm.accessible) $(input_3).setAttribute('tabindex',0);
					      setTimeout(function() {
					          $('input_3').hint('Tu nombre *');
					       }, 20);
					if (JotForm.accessible) $(input_4).setAttribute('tabindex',0);
					      setTimeout(function() {
					          $('input_4').hint('Tu correo electrónico *');
					       }, 20);
					if (JotForm.accessible) $(input_5).setAttribute('tabindex',0);
					      setTimeout(function() {
					          $('input_5').hint('Teléfono de contacto *');
					       }, 20);
					if (JotForm.accessible) $(input_6).setAttribute('tabindex',0);
					      JotForm.setCustomHint( 'input_6', 'Tu mensaje' );
					      JotForm.alterTexts({"ageVerificationError":"Debe ser mayor de {minAge} años para enviar este formulario.","alphabetic":"Este campo solo puede contener letras.","alphanumeric":"Este campo solo puede contener letras y números.","ccDonationMinLimitError":"La Cantidad Mínima es {minAmount} {currency}","ccInvalidCVC":"El número CVC no es válido.","ccInvalidExpireDate":"La fecha de expiración no es válida","ccInvalidNumber":"El número de su tarjeta de crédito no es válido.","ccMissingDetails":"Por favor rellene los datos de su Tarjeta de Crédito","ccMissingDonation":"Favor ponga valores númericos en la cantidad a donar.","ccMissingProduct":"Por favor seleccione al menos un producto.","characterLimitError":"Demasiados caracteres. El límite es","confirmClearForm":"¿Está seguro que desea limpiar el formulario?","confirmEmail":"El correo electrónico no coincide","currency":"Este campo sólo puede contener valores de moneda.","cyrillic":"Este campo solo puede contener caracteres cirílicos.","dateInvalid":"Esta fecha no es valida. El formato de fecha es {format}","dateInvalidSeparate":"Esta fecha no es válida. Ponga una {element} válida","dateLimited":"Esta fecha no está disponible.","disallowDecimals":"Por favor, introduzca un número entero.","email":"Introduzca una dirección e-mail válida","fillMask":"El valor de este campo debe llenar la mascara","freeEmailError":"No se permiten cuentas de correo gratuitas ","generalError":"Existen errores en el formulario, por favor corríjalos antes de continuar.","generalPageError":"Hay errores en esta página. Por favor, corríjalos antes de continuar.","gradingScoreError":"El puntaje total debería ser sólo \"menos que\" o \"igual que\"","incompleteFields":"Existen campos requeridos incompletos. Por favor complételos.","inputCarretErrorB":"La entrada debe ser menor al valor:","lessThan":"Tu puntuación debería ser menor o igual que","maxDigitsError":"El máximo de dígitos permitido es","multipleFileUploads_emptyError":"El fichero {file} está vacío; por favor, selecciona de nuevo los ficheros sin él.","multipleFileUploads_fileLimitError":"Solo {fileLimit} carga de archivos permitida.","multipleFileUploads_minSizeError":"{file} is demasiado pequeño, el tamaño mínimo de fichero es: {minSizeLimit}.","multipleFileUploads_onLeave":"Se están cargando los ficheros, si cierras ahora, se cancelará dicha carga.","multipleFileUploads_sizeError":"{file} es demasiado grande; el tamaño del archivo no debe superar los {sizeLimit}.","multipleFileUploads_typeError":"El fichero {file} posee una extensión no permitida. Sólo están permitidas las extensiones {extensions}.","numeric":"Este campo sólo admite valores numéricos.","pastDatesDisallowed":"La fecha debe ser futura","required":"Campo requerido.","requireEveryCell":"Se requieren todas las celdas.","requireEveryRow":"Todas las filas son obligatorias.","requireOne":"Al menos un campo requerido.","uploadExtensions":"Solo puede subir los siguientes archivos:","uploadFilesize":"Tamaño del archivo no puede ser mayor que:","uploadFilesizemin":"Tamañao de archivo no puede ser menos de:","url":"Este campo solo contiene una URL válida.","wordLimitError":"Demasiadas palabras. El límite es","wordMinLimitError":"Muy pocas palabras. El mínimo es"});
						JotForm.clearFieldOnHide="disable";
						JotForm.submitError="jumpToFirstError";
					    /*INIT-END*/
						});

					   JotForm.prepareCalculationsOnTheFly([null,{"name":"heading","qid":"1","text":"Contacto Casa Bonita","type":"control_head"},{"name":"submit2","qid":"2","text":"Enviar","type":"control_button"},{"description":"","name":"nombre","qid":"3","subLabel":"","text":"Nombre","type":"control_textbox"},{"description":"","name":"correo","qid":"4","subLabel":"","text":"Correo","type":"control_textbox"},{"description":"","name":"telefono","qid":"5","subLabel":"","text":"Telefono","type":"control_textbox"},{"description":"","name":"mensaje","qid":"6","subLabel":"","text":"Mensaje","type":"control_textarea"}]);
					   setTimeout(function() {
					JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Contacto Casa Bonita","type":"control_head"},{"name":"submit2","qid":"2","text":"Enviar","type":"control_button"},{"description":"","name":"nombre","qid":"3","subLabel":"","text":"Nombre","type":"control_textbox"},{"description":"","name":"correo","qid":"4","subLabel":"","text":"Correo","type":"control_textbox"},{"description":"","name":"telefono","qid":"5","subLabel":"","text":"Telefono","type":"control_textbox"},{"description":"","name":"mensaje","qid":"6","subLabel":"","text":"Mensaje","type":"control_textarea"}]);}, 20); 
					