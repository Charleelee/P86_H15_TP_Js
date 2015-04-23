'use strict'
//Fonctions utilitaires du cours P86
/**
*Extrai la partie nom de fichier d<une url
*@param url
*@returns {string}
*/
function extractFilename(url) {
	var result = '';
	var posSlash = url.lastIndexOf('/');
	result = url.substr(posSlash + 1);
	return result;
}