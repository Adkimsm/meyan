import './App.css'
import React from "react";

function App() {
  const [issues, setIssues] = React.useState([]);
  const Endpoint = "https://api.github.com/repos/Adkimsm/meyan/issues";
  const fetchPhotos = () => {
    fetch(Endpoint)
        .then((res) => res.json())
        .then((res) => {
          setIssues(res);
        });
  };
  React.useEffect(() => {
    fetchPhotos();
  }, [issues]);
  return <>    <div className="l-card" style={{position: "fixed", top: 0, left: 0}}>
      <section className="l-card__text"><p style={{textAlign: "center",width: "calc(100vw - 100px)"}}>Adkimsm</p></section>
  </div><main>
            {issues.map((res, i) => {
              if (res.body && res.user.login === "Adkimsm" && res.state === "open") {return (
                  <a href={res.html_url} key={i}>
                    <div className="l-card l-card_fixed">
                      <section className="l-card__text">
                        <p>
                          {res.body}
                        </p>
                      </section>
                      <section className="l-card__user">
                        <div className="l-card__userImage">
                          <img src={res.user.avatar_url} alt="Naruto" />
                        </div>
                        <div className="l-card__userInfo">
                          <span>{res.user.login}</span>
                        </div>
                      </section>
                    </div></a>
              )} else {return 0}
            })}
          </main></>
  /*if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (<div>
    <div className="l-card" style={{position: "fixed", top: 0, left: 0}}>
      <section className="l-card__text"><p style={{textAlign: "center",width: "calc(100vw - 100px)"}}>Adkimsm</p></section>
    </div>
    <main>
    {data.map((issue, i) => {
        if (issue.user.login === "Adkimsm")
          return <a href={issue.html_url} key={i}>
            <div className="l-card l-card_fixed">
              <section className="l-card__text">
                <p>
                  {issue.body}
                </p>
              </section>
              <section className="l-card__user">
                <div className="l-card__userImage">
                  <img src={issue.user.avatar_url} alt="Naruto" />
                </div>
                <div className="l-card__userInfo">
                  <span>{issue.user.login}</span>
                </div>
              </section>
            </div></a>
  })}</main>
  </div>)*/
}

export default App
