import * as React from 'react';
import  {useState} from 'react';

import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

import { IWizardProperties } from './IWizardProperties';
import { IWizardStep } from './IWizardStep';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";  
import "@pnp/sp/webs";  
import "@pnp/sp/lists";  
import "@pnp/sp/items";
import styles from './DocumentCardEXample.module.scss';

function Wizard(props : IWizardProperties ){

  const steps = props.steps;

  const initStep : IWizardStep = {idx: -1, title: 'Start', body: '<div></div>', allowBack: false, times:15000, showButtons: true};

  const [activeStep, setActiveStep] = useState(initStep);
  
   const writeLog =async ()=> {
    const listTitle = "Logs";
    const message = `Test Message: ${new Date().toISOString()}`;


    debugger;      
    
    
    const item = await sp.web.lists.getByTitle(listTitle).items.add({Title: message});
    debugger;
    console.log(item);
  };
  const start = () => {
    setActiveStep(steps[0]);
  };

  const next = () => {
    if(activeStep.idx < steps.length - 1){
      setActiveStep(steps[activeStep.idx + 1]);
      if(activeStep.idx>=steps.length-1){
        
      }
    }
    
  };
  
  const prev = () => {
    if(activeStep.allowBack && activeStep.idx > 0){
      setActiveStep(steps[activeStep.idx - 1]);
    }
    
  };
  
  const butto=<div><DefaultButton onClick={() => prev()} disabled={!activeStep.allowBack}>PREV</DefaultButton> | <PrimaryButton onClick={next}>NEXT</PrimaryButton></div>;
  const moving = <div>{activeStep.showButtons===true ?butto: '' }</div>;
  
  const progress=<div><h1>{activeStep.idx+1} from {steps.length-1}</h1></div>;
  const progressshow=<div>{activeStep.showButtons===true ?progress: '' }</div>;
    

  const formBody = <div dangerouslySetInnerHTML={{__html: activeStep.body}}></div>;
  const form = <div>
      <div>{progressshow}</div>
      <div>{formBody}</div>
      <div>{moving}</div>
  </div>;


  
    return (

      
      <div className="App">
            <div className={ styles.documentCardEXample }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Click Me to write something to Log list</p>
              <p className={ styles.title}>{escape(activeStep.title)}</p>
              <a href="#" className={ styles.button } onClick={this.writeLog}>
                <span className={ styles.label }>Write to Logs list</span>
              </a>
            </div>
          </div>
        </div>
      </div>
        <div>
          <h1>Wizard</h1>
   
          <div>
            
          {activeStep.idx  === -1 ? 
          <PrimaryButton onClick={start}>START</PrimaryButton> : form }

          </div>
    
        </div>
        
      </div>
    );
}
export default Wizard;

