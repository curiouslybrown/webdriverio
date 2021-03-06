/**
 *
 * Pulls a file from the device.
 *
 * @param {String} path  device path to file
 *
 * @see  https://github.com/appium/appium/blob/master/docs/en/appium-bindings.md#pull-file
 * @type appium
 *
 */

module.exports = function pullFileFromDevice(pathOnDevice) {

    /*!
     * make sure that callback contains chainit callback
     */
    var callback = arguments[arguments.length - 1];

    var requestOptions = {
        path: '/session/:sessionId/appium/device/pull_file',
        method: 'POST'
    };

    this.requestHandler.create(requestOptions, { path: pathOnDevice }, callback);

};