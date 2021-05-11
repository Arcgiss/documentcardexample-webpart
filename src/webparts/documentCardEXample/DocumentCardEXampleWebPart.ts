import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'DocumentCardEXampleWebPartStrings';
import Wizard from './components/Wizard';
import { IDocumentCardEXampleProps } from './components/IDocumentCardEXampleProps';
import { IWizardProperties } from './components/IWizardProperties';
import {
 
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { IWizardStep } from './components/IWizardStep';
import { values } from 'office-ui-fabric-react';
import { DescriptionFieldLabel, PropertyPaneDescription } from 'DocumentCardEXampleWebPartStrings';
import { sp } from '@pnp/sp';


export interface IWizardWebpartProperties {
  
  steps: IWizardStep[];
  
}
export interface IDocumentCardEXampleProperties {
  
  configuration:string;
  
}
// const json = {"idx": 0, "title": 'Step 0', "body": '<h3>HELLO WOROLD: this is step 0</h3>', "allowBack": false, "times":15000, "showButtons": true};
// //  {idx: 1, title: 'Step 1', body: '<iframe width="640px" height= "480px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=VS4EJDO7GUO_bKKw9KlHbSeweU-mh25BqI41q9j1R0RUNjVHQlUySTlaN1RKU0xIRFk4QzRNSkcwOC4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>', allowBack: false, times:0, showButtons: true},
// // {idx: 2, title: 'Step 2', body: '<iframe width="950" height="534" src="https://www.youtube.com/embed/j_HcLjzR1SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', allowBack: false, times:15000,  showButtons: true},
// //  {idx: 3, title: 'Step 3', body: '<h3>this step 3</h3>', allowBack: true, times:15000, showButtons: true},
// // {idx: 4, title: 'END', body: '<h3>THANK you for your submission, you will be graded soon</h3>', allowBack: true, times:0, showButtons: false}];



export default class DocumentCardEXampleWebPart extends BaseClientSideWebPart<IDocumentCardEXampleProps> {

  public onInit(): Promise<void> {  
    return super.onInit().then(_ => {    
      sp.setup({  
        spfxContext: this.context  
      });  
    });  
  }  
  
  public render(): void {
    debugger;

    const config = JSON.parse(this.properties.configuration);

    const props : IWizardProperties = 
    {
      
      steps: config
      /*
      [
      
        {idx: 0, title: 'Step 0', body: '<h3>HELLO WOROLD: this is step 0</h3>', allowBack: false, times:15000, showButtons: true},
      {idx: 1, title: 'Step 1', body: '<iframe width="640px" height= "480px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=VS4EJDO7GUO_bKKw9KlHbSeweU-mh25BqI41q9j1R0RUNjVHQlUySTlaN1RKU0xIRFk4QzRNSkcwOC4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>', allowBack: false, times:0, showButtons: true},
      {idx: 2, title: 'Step 2', body: '<iframe width="950" height="534" src="https://www.youtube.com/embed/j_HcLjzR1SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', allowBack: false, times:15000,  showButtons: true},
    {idx: 3, title: 'Step 3', body: '<h3>this step 3</h3>', allowBack: true, times:15000, showButtons: true},
    {idx: 4, title: 'END', body: '<h3>THANK you for your submission, you will be graded soon</h3>', allowBack: true, times:0, showButtons: false}
    
    ]*/
  };

    
    
    const element: React.ReactElement<IWizardProperties> = React.createElement(
      Wizard,
       props, 
       
       
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  //protected get dataVersion(): Version {
   // return Version.parse('1.0');
  //}
 
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
     
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('configuration', {
                  label: 'Configuration'
                  
                })

                
              ]
            }
          ]
        }
      ]
      
    };
  }
}


