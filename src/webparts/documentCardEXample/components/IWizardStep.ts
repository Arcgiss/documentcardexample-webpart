export interface IWizardStep {
    idx: number;
    title: string;
    body: string;
    allowBack: boolean;
    times: number;
    showButtons: boolean;
    //{idx: 0, title: 'Step 0', body: '<h3>this step 0</h3>', allowBack: false, times:15000, showbuttons: true}
}