import axios from 'axios';

const HttpsAction = async ({
    method = 'GET',
    url = '',
    baseURL = '',
    data = null,
    headers = {},
    positiveCallBack = (e) => e,
    negativeCallBack = (e) => e,
    finallyCallBack = (e) => e
}) => {
    try {
        return await axios({
            method,
            baseURL,
            url,
            data,
            headers
        }).then(async (response) => await positiveCallBack(response));
    } catch (e) {
        return await negativeCallBack(e);
    } finally {
        await finallyCallBack();
    }
};

export default HttpsAction;
