import "./App.css";
import ComposantProfile from "./profile/ComposantProfile";
import HandleeName from "./profile/HandleeName";

function App() {
  return (
    <div className="app"
      style={{
        display: "block",
        justifyContent: "space-around",
        marginTop: "50px"
      }}>
        <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}>
      <ComposantProfile
        name="Omar zribi"
        job="full stack JavaScript developer"
        city="Sfax"
        nubphone={2200022}>
          <img
            style={{ height: "150px", width: "150px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe1CoCl_RdwRuFacbAxN5LKBCpezMEfKM--lhEEc7XIugUgcep7zIABlVjWZgv21BH2M&usqp=CAU"
            alt=""
          />
        <HandleeName name="Omar zribi" />
      </ComposantProfile>

      <ComposantProfile
        name="Nejah yengui"
        job="instructor in go my code"
        city="Sfax"
        nubphone={55000055}>
          <img
            style={{ height: "150px", width: "150px" }}
            src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
            alt=""
          />
        <HandleeName name="Nejah Yengui" />
      </ComposantProfile>
      <ComposantProfile name="foulan ben boulan" job="chomeur" city="Tunis"
              nubphone={99000099}>
          <img
            style={{ height: "150px", width: "150px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD_OQ0FU9Bzh97svv-wUZmrfVTPIpG-UCFA&usqp=CAU"
            alt=""
          />
        <HandleeName name="Foulen Ben Foulen" />
      </ComposantProfile></div>
      <div  style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}>
      <ComposantProfile>
        <img
            style={{ height: "150px", width: "150px" }}
            src=""
            alt=""
          />
        <HandleeName />
      </ComposantProfile>
      <ComposantProfile>
        <img
            style={{ height: "150px", width: "150px" }}
            src=""
            alt=""
          />
        <HandleeName />
      </ComposantProfile>
      <ComposantProfile>
        <img
            style={{ height: "150px", width: "150px" }}
            src=""
            alt=""
          />
        <HandleeName />
      </ComposantProfile>
      </div>      
    </div>
  );
}
export default App;
