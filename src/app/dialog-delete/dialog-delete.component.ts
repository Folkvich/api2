import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

export interface UsersData {
  Cname: string;
  id: number;
}
@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = data;
    // this.action = this.local_data.action;
  }
  async deleteDialog(){
    this.deleteCake(this.data['cake_id']);
    this.dialogRef.close({event:'Delete'});
  }

   async deleteCake(id : string) {
    let sendBody = JSON.stringify({ 
      "cake_id": id 
    })
    console.log('body',sendBody)

    await fetch(`https://eupiwacc9g.execute-api.ap-southeast-1.amazonaws.com/v1/cake/con3`,
      {
        method: 'DELETE',
        body: sendBody
      }).then(res => res.json()).then( res1 => {
        
        console.log(res1)
      })
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
