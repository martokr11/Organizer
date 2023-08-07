import axios from 'axios';
import { Dialog } from 'quasar';
import { Loading, Notify } from 'quasar';

export default class Utils {
  static Get(_url, _is_spinner = false) {
    if (_is_spinner) var spinner = Loading.show();
    const result = axios.get(_url);
    result.catch(error => {
      if (_is_spinner) Loading.hide();
      Utils.DialogErr(error.toString());
    });
    return result;
  };

  static Post(_url, _data, _is_spinner = false, _responseType = 'json') {
    if (_is_spinner) var spinner = Loading.show({ spinnerColor : 'green-4' });
    
    const result = axios.post(_url, _data, { responseType: _responseType, contentType: 'application/json' });
    result.catch(error => {
      if (_is_spinner) Loading.hide();
      return Utils.DialogErr(error.code);
    });
    result.then((res) => {
      if (_is_spinner) Loading.hide();
      if (res.data && res.data.msg) return Utils.DialogErr(res.data.msg);
    });    
    return result;
  };

  static DialogErr(_msg) {
    Dialog.create({
      title  : 'Възникна грешка!',
      message: _msg
    });
  };
}