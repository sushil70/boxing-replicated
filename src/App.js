import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./elements/Header";
import Footer from "./elements/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Shop from "./pages/Shop";
import ShopM from "./pages/ShopM.js";
import Partnership from "./pages/Partnership";
import Inquiries from "./pages/Inquiries";
import Support from "./pages/Support";
import Sitemap from "./pages/Sitemap";
import Contact_us from "./pages/Contact_us";
import Privacy_Policy from "./pages/Privacy_Policy";
import Terms_of_use from "./pages/Terms_of_use";
import Advertise_With_Us from "./pages/Advertise_With_Us";
import Cookie_Policy from "./pages/Cookie_Policy";
import Injuries from "./pages/Injuries";
import Default from "./pages/Default";
import NewsDetails from "./pages/NewsDetails";
import MmaNewsDetails from "./pages/MmaNewsDetails";
import Article from "./pages/Article";
import Kids from "./pages/Kids";
import Forums from "./pages/Forums";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Espanol from "./pages/Espanol";
import EspboxingDetails from "./pages/EspboxingDetails";
import EspanolMma from "./pages/EspanolMma";
import EspmmaDetails from "./pages/EspmmaDetails";
import Comingsoon from "./pages/Comingsoon";
import SignIn from "./elements/SignIn.js";
import Registration from "./elements/Registration.js";
import Search from "./pages/Search.js";

import Consulting from "./pages/services/Consulting";
import Promotions from "./pages/services/Promotions";
import TalentRepresentation from "./pages/services/TalentRepresentation";
import BoxingService from "./pages/services/BoxingService.js";
import MmaService from "./pages/services/MmaService.js";
import CoachesService from "./pages/services/CoachesService.js";
import SpeakersService from "./pages/services/SpeakersService.js";

import NewsBoxing from "./pages/custom/NewsBoxing";
import NewsMma from "./pages/custom/NewsMma";
import BoxingOdds from "./pages/custom/BoxingOdds";
import PersonalTraining from "./pages/custom/PersonalTraining";
import KidsJuniors from "./pages/custom/KidsJuniors";
import PhysicalMentalBenefits from "./pages/custom/PhysicalMentalBenefits";
import ProgramsFaq from "./pages/custom/ProgramsFaq.js";
import Location from "./pages/custom/Location";
import Sponsorships from "./pages/custom/Sponsorships";
import SponsorshipBox from "./pages/custom/SponsorshipBox";
import SponsorshipMma from "./pages/custom/SponsorshipMma";
import Marketing from "./pages/custom/Marketing";
import Contact from "./pages/Contact.js";
import FightSchedules from "./pages/FightSchedules.js";
import Workout from "./pages/Workout.js";
import BjjTraining from "./pages/BjjTraining.js";
import SkillDevelopment from "./pages/SkillDevelopment.js";
import Assessment from "./pages/Assessment.js";
import Concussions from "./pages/Concussions.js";
import CutTreatment from "./pages/CutTreatment.js";
import Angle from "./pages/Angle.js";
import AliAct from "./pages/AliAct.js";
import RssDirectory from "./pages/RssDirectory.js";
import PodcastBoxing from "./pages/custom/PodcastBoxing";
import PodcastMma from "./pages/custom/PodcastMma";
import Injury from "./pages/Injury.js";
import Max from "./pages/Max.js";
import ExternalPage from "./pages/ExternalPage.js";
import WorkoutBoxing from "./pages/WorkoutBoxing";
import ThaiBoxing from "./pages/ThaiBoxing";
import CommentPolicy from "./pages/CommentPolicy";

import BoxingTraining from "./pages/videos/BoxingTraining";
import MMATraining from "./pages/videos/MMATraining";
import AllTraining from "./pages/videos/AllTraining";

import Layout from "./pages/Layout";
// import LayoutComing from "./pages/LayoutComing";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="support" element={<Support />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="contact" element={<Contact_us />} />
          <Route path="privacy_Policy" element={<Privacy_Policy />} />
          <Route path="terms_of_use" element={<Terms_of_use />} />
          <Route path="advertise_With_Us" element={<Advertise_With_Us />} />
          <Route path="cookie_policy" element={<Cookie_Policy />} />
          <Route path="injuries" element={<Injuries />} />
          <Route path="news/boxing/:id/:p" element={<NewsDetails />} />
          <Route path="news/mma/:id/:p" element={<MmaNewsDetails />} />
          <Route path="article/:id" element={<Article />} />
          <Route path="mvp-kids/:id" element={<Kids />} />
          <Route path="mvp-kids/:id/:content_id" element={<Kids />} />
          <Route path="body-injury/:id" element={<Injury />} />
          <Route path="external/:url" element={<ExternalPage />} />
          <Route path="forums" element={<Forums />} />
          <Route path="news" element={<News />} />
          <Route path="espanol-boxeo" element={<Espanol />} />
          <Route path="news/boxeo/:id/:p" element={<EspboxingDetails />} />
          <Route path="espanol-amm" element={<EspanolMma />} />
          <Route path="news/amm/:id/:p" element={<EspmmaDetails />} />
          <Route path="videos" element={<Videos />} />
          <Route path="betting" element={<Comingsoon />} />
          <Route path="Comingsoon" element={<Comingsoon />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="registration" element={<Registration />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="fightSchedules" element={<FightSchedules />} />
          <Route path="workout" element={<Workout />} />
          <Route path="article/brazilian-jiu-jitsu" element={<BjjTraining />} />
          <Route path="article/skills" element={<SkillDevelopment />} />
          <Route path="article/athlete-assessment" element={<Assessment />} />
          <Route
            path="article/link-between-cte-and-football-players"
            element={<Concussions />}
          />
          <Route path="article/cut-treatment" element={<CutTreatment />} />
          <Route path="article/womens-sports-injuries" element={<Angle />} />
          <Route
            path="article/muhammad-ali-boxing-reform-act"
            element={<AliAct />}
          />
          <Route path="rss-directory" element={<RssDirectory />} />
          <Route path="podcasts/boxing/:id" element={<PodcastBoxing />} />
          <Route path="podcasts/mma/:id" element={<PodcastMma />} />
          <Route path="article/vo2-max" element={<Max />} />
          <Route path="search" element={<Search />} />

          <Route path="workout/boxing-workout" element={<WorkoutBoxing />} />
          <Route path="workout/thai-boxing-workout" element={<ThaiBoxing />} />
          <Route
            path="services/talent-representation"
            element={<TalentRepresentation />}
          />
          <Route path="services/consulting" element={<Consulting />} />
          <Route path="services/promotions" element={<Promotions />} />
          <Route
            path="talent-representation/boxing"
            element={<BoxingService />}
          />
          <Route path="talent-representation/mma" element={<MmaService />} />
          <Route
            path="services/talent-representation/coaches"
            element={<CoachesService />}
          />
          <Route
            path="services/talent-representation/speakers"
            element={<SpeakersService />}
          />

          <Route path="news-boxing" element={<NewsBoxing />} />
          <Route path="news-mma" element={<NewsMma />} />
          <Route path="odds" element={<BoxingOdds />} />
          <Route path="PersonalTraining" element={<PersonalTraining />} />
          <Route path="kids--juniors" element={<KidsJuniors />} />
          <Route
            path="physicalmentalbenefits"
            element={<PhysicalMentalBenefits />}
          />
          <Route path="faq" element={<ProgramsFaq />} />
          <Route path="location/chicago" element={<Location />} />
          <Route path="services/sponsorships" element={<Sponsorships />} />
          <Route path="sponsorships/boxing" element={<SponsorshipBox />} />
          <Route path="sponsorships/mma" element={<SponsorshipMma />} />
          <Route path="services/marketing" element={<Marketing />} />

          <Route
            path="videos/boxing-training/:id"
            element={<BoxingTraining />}
          />
          <Route path="videos/mma-training/:id" element={<MMATraining />} />
          <Route path="videos/all-access/:id" element={<AllTraining />} />
          <Route path="comment_policy" element={<CommentPolicy />} />

          <Route path="*" element={<Default />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="shop" element={<Shop />} />
          <Route path="launchingsoons" element={<ShopM />} />
          <Route path="launchingsoon" element={<Shop />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
