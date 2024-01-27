export class Log {
    id?: number;
    ruc: string;
    businessName: string;
    request: string;
    thirdPartyResponseXml: string;
    requestDate: string;
    responseDate: string;
    thirdPartyServiceInvocationDate: string;
    thirdPartyServiceResponseDate: string;
    objectTypeAndDocEntry: string;
    seriesAndCorrelative: string;
  
    constructor(
      ruc: string,
      businessName: string,
      request: string,
      thirdPartyResponseXml: string,
      requestDate: string,
      responseDate: string,
      thirdPartyServiceInvocationDate: string,
      thirdPartyServiceResponseDate: string,
      objectTypeAndDocEntry: string,
      seriesAndCorrelative: string
    ) {
      this.ruc = ruc;
      this.businessName = businessName;
      this.request = request;
      this.thirdPartyResponseXml = thirdPartyResponseXml;
      this.requestDate = requestDate;
      this.responseDate = responseDate;
      this.thirdPartyServiceInvocationDate = thirdPartyServiceInvocationDate;
      this.thirdPartyServiceResponseDate = thirdPartyServiceResponseDate;
      this.objectTypeAndDocEntry = objectTypeAndDocEntry;
      this.seriesAndCorrelative = seriesAndCorrelative;
    }
  }