export class Log {
    id?: number;
    ruc: string;
    businessName: string;
    request: string;
    response: string;
    thirdPartyRequestXml: string;
    thirdPartyResponseXml: string;
    requestDate: Date;
    responseDate: Date;
    thirdPartyServiceInvocationDate: Date;
    thirdPartyServiceResponseDate: Date;
    objectTypeAndDocEntry: string;
    seriesAndCorrelative: string;

    constructor(
      ruc: string,
      businessName: string,
      request: string,
      response: string,
      thirdPartyRequestXml: string,
      thirdPartyResponseXml: string,
      requestDate: Date,
      responseDate: Date,
      thirdPartyServiceInvocationDate: Date,
      thirdPartyServiceResponseDate: Date,
      objectTypeAndDocEntry: string,
      seriesAndCorrelative: string
    ) {
      this.ruc = ruc;
      this.businessName = businessName;
      this.request = request;
      this.response = response;
      this.thirdPartyRequestXml = thirdPartyRequestXml;
      this.thirdPartyResponseXml = thirdPartyResponseXml;
      this.requestDate = requestDate;
      this.responseDate = responseDate;
      this.thirdPartyServiceInvocationDate = thirdPartyServiceInvocationDate;
      this.thirdPartyServiceResponseDate = thirdPartyServiceResponseDate;
      this.objectTypeAndDocEntry = objectTypeAndDocEntry;
      this.seriesAndCorrelative = seriesAndCorrelative;
    }
  }
