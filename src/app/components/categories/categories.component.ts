import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent  implements OnInit{
  content = 'account-details'
  horoscopePara = []
  pariharamPara = ['To enhance your chances of studying abroad, consider incorporating practices that align with your astrological chart. You might explore wearing gemstones associated with education and travel, such as yellow sapphire or emerald, after consulting with an astrologer. Additionally, performing rituals or prayers to planetary deities linked with education and travel, such as Lord Jupiter or Lord Mercury, could be beneficial. Maintaining a positive mindset, staying focused on your goals, and actively seeking opportunities aligned with your aspirations are also crucial parihara (remedial measures) to manifest your desire to study abroad.'];
  steps_to_contact = "Generate Free Horoscope"
  stc=0
  h_p = 'horoscope'
  dashboardToeducation:any = {}
  category:any={
    "Education": {
      "horoscope": this.pariharamPara[0]+this.pariharamPara[0]+"Today's horoscope suggests that educational pursuits are favored for you, encouraging exploration & expansion of knowledge. There may be an indication of opportunities arising that could facilitate studying abroad. Keep an open mind & remain receptive to new experiences, as the cosmos may align to support your aspirations for international education. Consider researching potential programs or discussing your options with mentors or advisors to seize the chance to broaden your horizons through studying abroad.",
      "pariharam": "To enhance your chances of studying abroad, consider incorporating practices that align with your astrological chart. You might explore wearing gemstones associated with education and travel, such as yellow sapphire or emerald, after consulting with an astrologer. Additionally, performing rituals or prayers to planetary deities linked with education and travel, such as Lord Jupiter or Lord Mercury, could be beneficial. Maintaining a positive mindset, staying focused on your goals, and actively seeking opportunities aligned with your aspirations are also crucial parihara (remedial measures) to manifest your desire to study abroad."
    },
    "Health": {
      "horoscope": "Today's horoscope indicates a focus on maintaining your physical and mental well-being. It's a good time to implement a new fitness regime or revisit your dietary habits to ensure they support your overall health. Be mindful of stress levels and incorporate relaxation techniques such as meditation or yoga into your daily routine. Pay attention to any minor health concerns and address them promptly to prevent them from escalating.",
      "pariharam": "To improve your health, consider adopting holistic practices that align with your astrological chart. Wearing gemstones like blue sapphire or amethyst, known for their healing properties, can be beneficial after consulting with an astrologer. Additionally, performing rituals or prayers to deities associated with health, such as Dhanvantari or Lord Shiva, can aid in maintaining well-being. Engaging in regular physical activity, following a balanced diet, and practicing mindfulness are also important parihara (remedial measures) for sustaining good health."
    },
    "Career": {
      "horoscope": "Your horoscope suggests that career advancements are on the horizon. You may encounter new job opportunities or projects that allow you to showcase your skills and talents. It's a favorable time to seek promotions or make strategic moves in your professional life. Stay diligent, network effectively, and remain open to constructive feedback, as these actions will pave the way for success and recognition in your field.",
      "pariharam": "To boost your career prospects, consider wearing gemstones like ruby or garnet, which are believed to enhance professional success, after consulting with an astrologer. Performing rituals or prayers to deities associated with career growth, such as Lord Ganesha or Lord Vishnu, can also be beneficial. Maintaining a proactive attitude, continuously upgrading your skills, and seeking mentorship are crucial parihara (remedial measures) for achieving career success."
    },
    "Marriage": {
      "horoscope": "Today's horoscope emphasizes harmony and understanding in your marital relationship. It's a good time to resolve any misunderstandings and strengthen your bond with your partner. Open communication and empathy will play key roles in enhancing your relationship. For those seeking marriage, the stars may indicate favorable conditions for meeting a potential life partner.",
      "pariharam": "To improve marital harmony, consider wearing gemstones like diamond or coral, which are associated with love and relationships, after consulting with an astrologer. Performing rituals or prayers to deities associated with marriage, such as Goddess Parvati or Lord Shiva, can also be helpful. Fostering open communication, showing appreciation, and spending quality time with your partner are important parihara (remedial measures) for a successful marriage."
    },
    "Business": {
      "horoscope": "Today's horoscope suggests positive developments in your business ventures. It's a good time to explore new markets or launch new products. Be strategic in your planning and execution, and stay open to collaborations that can enhance your business growth. Financial gains and increased client engagement are likely if you remain focused and adaptable.",
      "pariharam": "To enhance your business prospects, consider wearing gemstones like emerald or yellow sapphire, which are believed to attract wealth and success, after consulting with an astrologer. Performing rituals or prayers to deities associated with prosperity, such as Goddess Lakshmi or Lord Kubera, can also be beneficial. Staying innovative, maintaining strong customer relations, and effectively managing finances are crucial parihara (remedial measures) for achieving business success."
    },
    "Other": {
      "horoscope": "Today's horoscope encourages you to embrace new experiences and personal growth. It's a favorable time to take up new hobbies or engage in activities that bring you joy and fulfillment. Stay open to learning and self-improvement opportunities that can enhance your overall well-being.",
      "pariharam": "To support personal growth, consider wearing gemstones like amethyst or moonstone, which are associated with spiritual development, after consulting with an astrologer. Performing rituals or prayers to deities linked with wisdom and enlightenment, such as Goddess Saraswati or Lord Buddha, can also be helpful. Engaging in self-reflection, pursuing creative endeavors, and fostering positive relationships are important parihara (remedial measures) for personal fulfillment."
    }
  }
  
  constructor(private route: ActivatedRoute,private router: Router)
  {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.dashboardToeducation = navigation.extras.state['from-dshToedu'];
      console.log("dashboardToeducation => ",this.dashboardToeducation);
    }
  }
  ngOnInit(): void {
  }

  stepsToContact()
  {
    switch (this.stc) {
      case 0:
        this.content = 'generate-free-horoscope';this.steps_to_contact = "Get Parihara";this.stc=1
        break;
      case 1:
        this.content = 'generate-free-horoscope';this.steps_to_contact = "Talk to our Specialist";this.stc=2;this.h_p='pariharam'
        break;
      case 2:
        this.content = 'talk-to-our-specialist';this.steps_to_contact = "Back to the Homepage";this.stc=3
        break;
      case 3:
        this.router.navigate(["/dashboard"], {relativeTo:this.route});
        break;
      default:
        // Optional: handle unexpected values
        break;
    }
    
    console.log("content => ",this.content)
  }
  generateFreeHoroscope()
  {
    this.content = 'generate-free-horoscope'
    console.log("content => ",this.content)
  }
  

Pariharamsection = false;

Specialistsection = false;

getParihara() {

  this.Pariharamsection = !this.Pariharamsection;

  if (this.Pariharamsection) {

    this.Specialistsection = false;

  }

}

TalktoSpecialist() {

  this.Specialistsection = !this.Specialistsection;

  if (this.Specialistsection && this.Pariharamsection) {

    this.Pariharamsection = true;

  }

}
}
