import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { DialogAddHouseComponent } from "../DialogAddHouse/dialog-add-house.component";
import { Propiedad } from "app/model/propiedad";

@Component({
    selector: 'dialog-overview-house-details',
    templateUrl: './dialog-overview-house-details.html',
  })
  export class DialogOverviewHouseDetails {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewHouseDetails>,
      @Inject(MAT_DIALOG_DATA) public data: Propiedad,
      public dialog: MatDialog) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    openUpdateHouse() {
      const dialogRef = this.dialog.open(DialogAddHouseComponent,{
        width: '600px',
        height: '445px',
        data: { title: 'Update House', subtitle: 'Actualice los datos de la casa', titleButton: 'Update', add: false, house: this.data}
      });
    }
  
  }