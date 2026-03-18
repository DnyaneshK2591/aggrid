import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  gridOptions = {
    suppressRowTransform: true
  };

  rowData = [
    { group: 'Row', value1: 'Row 1', value2: 'Row 1', span: 3 },
    { group: '', value1: 'Row 2', value2: 'Row 2', span: 1 },
    { group: '', value1: 'Row 3', value2: 'Row 3', span: 1 },

    { group: 'Row', value1: 'Row 1', value2: 'Row 1', span: 3 },
    { group: '', value1: 'Row 2', value2: 'Row 2', span: 1 },
    { group: '', value1: 'Row 3', value2: 'Row 3', span: 1 }
  ];

  columnDefs: ColDef[] = [
    {
      headerName: 'Row',
      field: 'group',
      rowSpan: params => params.data.span,

      // 🔥 IMPORTANT: apply class only to spanning cell
      cellClassRules: {
        'span-cell': params => params.data.span > 1,
        'hidden-cell': params => params.data.span === 1
      }
    },
    { field: 'value1' },
    { field: 'value2' }
  ];

}