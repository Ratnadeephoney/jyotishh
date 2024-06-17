import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  
  clientDetails = 
  [
    {
      clientImg : 'assets/images/client-profile.png',
      requested : 'Voice Call Requested',
      day : 'Today',
      personName : 'Santosh Kumar',
      Zodic : 'Sagittarius',
      DOB : '14/07/1993',
      payment : 'Done',
      question : ' About my Education. I am trying to do master in science, will i get success in that?',
      status: 'Accept Call Request',
      chatRequested : 'Chat Requested',
      // appointmentDate : '29th May,2024'
    },
    {
      clientImg : 'assets/images/client-profile.png',
      requested : 'Chat Requested',
      // day : 'Today',
      personName : 'Santosh Kumar',
      Zodic : 'Sagittarius',
      DOB : '14/07/1993',
      payment : 'Done',
      question : ' About my Education. I am trying to do master in science, will i get success in that?',
      status: 'Accept Call Request',
      chatRequested : 'Chat Requested',
      appointmentDate : '29th May,2024'
    },
    {
      clientImg : 'assets/images/client-profile.png',
      requested : 'Video Call Requested',
      // day : 'Today',
      personName : 'Santosh Kumar',
      Zodic : 'Sagittarius',
      DOB : '14/07/1993',
      payment : 'Done',
      question : ' About my Education. I am trying to do master in science, will i get success in that?',
      status: 'Accept Call Request',
      chatRequested : 'Chat Requested',
      appointmentDate : '29th May,2024'
    }
  ];


}
