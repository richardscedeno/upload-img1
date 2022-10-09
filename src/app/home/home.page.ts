import { Component } from '@angular/core';

import { Camera, CameraOptions  } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  picture:any[]=[];
  base64Image:any;

  constructor(private camera:Camera) {
  }

  AccessCamera(){
    this.camera.getPicture({

      targetWidth:400,   
      targetHeight:200,   
      correctOrientation:true,   
      sourceType: this.camera.PictureSourceType.CAMERA,   
      destinationType: this.camera.DestinationType.DATA_URL
   
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64,"+imageData;
      this.picture = imageData;
    },(err) => {
      console.log(err);
    });
  }
   
  AccessGallery(){
   this.camera.getPicture({
  
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.DATA_URL
  
   }).then((imageData) => {
     this.base64Image = "data:image/jpeg;base64,"+imageData;
     this.picture = imageData;
   },(err) => {
     console.log(err);
   });
  }

  // Upload(){
  //   var headers = new Headers();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type', 'application/json' );

  //   let options = new RequestOptions({ headers: headers });  
  //   let data = {
  //     image:this.base64Image
  //   };
  
  //   let loader = this.loading.create({
  
  //     content: 'Processing please wait…',
  
  //   });
  
  //   loader.present().then(() => {
    
  //     this.http.post('http://ionicdon.com/mobile/upload_data.php',data,options).map(res => res.json())
  //     .subscribe(res => {
  //       loader.dismiss()

  //       if(res=="Successfully_Uploaded"){
        
  //         let alert = this.alertCtrl.create({
  //           title:"CONGRATS",
  //           subTitle:(res),
  //           buttons: ['OK']
  //         });
        
  //         alert.present();

  //       }else {
        
  //         let alert = this.alertCtrl.create({
  //           title:"ERROR",
  //           subTitle:"Image could not be uploaded",
  //           buttons: ['OK']
  //         });
  //         alert.present();
  //       }
  //     });
  //   });
  // }

}
