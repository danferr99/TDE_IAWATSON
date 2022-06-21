import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2022-04-07',
  authenticator: new IamAuthenticator({
    apikey: "qi4b61NCLqbjAyubISqKy9kYu3gaUFsrkAfo9UhdbUc4",
  }),
  serviceUrl: "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/38d41435-95f1-44c2-be41-40f02121825a",
});


function getText(text: string) {
  const analyzeParams = {
    'text': text,
    'features': {
      'entities': {
        'emotion': true,
        'sentiment': true,
        'limit': 10,
      },
      'keywords': {
        'emotion': true,
        'sentiment': true,
        'limit': 10,
      },
    },
  };

  naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      console.log(JSON.stringify(analysisResults, null, 2));
    })
    .catch(err => {
      console.log('error: ', err);
    });
}

getText('Bolsonaro is the worst president Brazil has ever had');