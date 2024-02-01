import {AES, enc} from 'crypto-js';

class EncryptStorage {
    private encryptionSecret = 'plataformaVenturaKey'
  
    //LocalStorage
    private setLocalStorage(key: string, value: any){
      const encryptedObject = AES.encrypt(JSON.stringify(value), this.encryptionSecret);
      localStorage.setItem(key, encryptedObject.toString());
    }
  
    private getLocalStorage(key: string): any{
      if(localStorage.getItem(key)){
        const decrypted = AES.decrypt(localStorage.getItem(key), this.encryptionSecret);
        return JSON.parse(decrypted.toString(enc.Utf8));
      }
      return null;
    }
  
    private removeAllLocalStorage(){
      localStorage.clear();
    }
  
    private removeLocalStorage(key:any) {
      localStorage.removeItem(key);
    }
  
    //SessionStorage
    private setSessionStorage(key: string, value: any){
      const encryptedObject = AES.encrypt(JSON.stringify(value), this.encryptionSecret);
      sessionStorage.setItem(key, encryptedObject.toString());
    }
  
    private getSessionStorage(key: string): any{
      if(sessionStorage.getItem(key)){
        const decrypted = AES.decrypt(sessionStorage.getItem(key), this.encryptionSecret);
        return JSON.parse(decrypted.toString(enc.Utf8));
      }
      return null;
    }
  
    private removeAllSessionStorage(){
      sessionStorage.clear();
    }
  
    private removeSessionStorage(key:any) {
      sessionStorage.removeItem(key);
    }
  
    setRememberStorage(remember: boolean){
      this.setLocalStorage("rememberStorage", remember);
    }
  
    private getRememberStorage(): boolean{
      let isRememberStorage: boolean = this.getLocalStorage("rememberStorage");
      return isRememberStorage;
    }
  
    setStorage(key: string, value: any){
      if(this.getRememberStorage()){
        this.setLocalStorage(key, value);
      } else{
        this.setSessionStorage(key, value);
      }
    }
  
    getStorage(key: string): any{
      if(this.getRememberStorage()){
        return this.getLocalStorage(key);
      } else {
        return this.getSessionStorage(key);
      }
    }
  
    removeStorage(key: string){
      if(this.getRememberStorage()){
        this.removeLocalStorage(key);
      } else {
        this.removeSessionStorage(key);
      }
    }
  
    removeAllStorage(){
      this.removeAllLocalStorage();
      this.removeAllSessionStorage();
    }
  
  }
  export const encryptStorage = new EncryptStorage();