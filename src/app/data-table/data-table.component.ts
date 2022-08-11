import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  GridReadyEvent,
  StatusPanelDef,
} from 'ag-grid-community';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  public columnDefs: ColDef[] = [
    { field: 'Order' },
    { field: 'level' },
    { field: 'code' },
    { field: 'Parent' },
    { field: 'val',aggFunc: 'sum' },
    { field: 'Description' },
  ];

  public rowData: any[];
  @ViewChild(AgGridAngular) agGrid: AgGridAngular;

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };
  public statusBar: {
    statusPanels: StatusPanelDef[];
  } = {
    statusPanels: [{ statusPanel: 'agAggregationComponent' }],
  };

  constructor() {}

  onGridReady(params: GridReadyEvent) {
    this.rowData = [
      {
        Order: 398481,
        level: 1,
        code: 'A',
        Parent: 'A',
        val: 10,
        Description: '	AGRICULTURE, FORESTRY AND FISHING',
      },
      {
        Order: 398482,
        level: 2,
        code: 'A',
        Parent: 'A',
        val: 20,
        Description: '	AGRICULTURE, FORESTRY AND FISHING',
      },
      {
        Order: 398483,
        level: 3,
        code: 'A',
        Parent: 'A',
        Description: '	AGRICULTURE, FORESTRY AND FISHING',
        val: 30,
      },
      {
        Order: 398484,
        level: 4,
        code: 'A',
        Parent: 'A',
        Description: '	AGRICULTURE, FORESTRY AND FISHING',
        val: 40,
      },
      {
        Order: 398481,
        level: 1,
        code: 'A',
        Parent: 'A',
        Description: '	AGRICULTURE, FORESTRY AND FISHING',
        val: 50,
      },
    ];

    this.statusBar = {
      statusPanels: [
        {
          statusPanel: 'agAggregationComponent',
          statusPanelParams: {
            aggFuncs: ['sum', 'count'],
          },
        },
      ],
    };
  }
}
