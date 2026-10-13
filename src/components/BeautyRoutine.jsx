export default function BeautyRoutine() {
  return (
    <>
      <section id="beauty-routine">
          <div className="section-header reveal">
              <div className="section-tag">Personalized Just For You</div>
              <h2 className="section-title">Your <span className="italic">Beauty</span> Routine</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Tell us about yourself and we will craft your perfect morning and night beauty
                  ritual.</p>
          </div>
          <div id="routine-quiz" className="reveal">
              <div className="quiz-steps">
                  <div className="quiz-step active" id="qstep-1">
                      <h3>What is your age group?</h3>
                      <div className="quiz-options"><button onClick={(e) => window.selectQuiz(1,'teen', e.currentTarget)}>🌸 Teen (13-19)</button><button
                              onClick={(e) => window.selectQuiz(1,'20s', e.currentTarget)}>💫 20s</button><button onClick={(e) => window.selectQuiz(1,'30s', e.currentTarget)}>✨
                              30s</button><button onClick={(e) => window.selectQuiz(1,'40plus', e.currentTarget)}>👑 40+</button></div>
                  </div>
                  <div className="quiz-step" id="qstep-2">
                      <h3>What is your hair type?</h3>
                      <div className="quiz-options"><button onClick={(e) => window.selectQuiz(2,'straight', e.currentTarget)}>💆 Straight</button><button
                              onClick={(e) => window.selectQuiz(2,'wavy', e.currentTarget)}>🌊 Wavy</button><button onClick={(e) => window.selectQuiz(2,'curly', e.currentTarget)}>🌀
                              Curly</button><button onClick={(e) => window.selectQuiz(2,'coily', e.currentTarget)}>🍥 Coily</button></div>
                  </div>
                  <div className="quiz-step" id="qstep-3">
                      <h3>What is your skin type?</h3>
                      <div className="quiz-options"><button onClick={(e) => window.selectQuiz(3,'dry', e.currentTarget)}>🏜️ Dry</button><button
                              onClick={(e) => window.selectQuiz(3,'oily', e.currentTarget)}>💧 Oily</button><button onClick={(e) => window.selectQuiz(3,'combo', e.currentTarget)}>⚖️
                              Combination</button><button onClick={(e) => window.selectQuiz(3,'sensitive', e.currentTarget)}>🌷 Sensitive</button></div>
                  </div>
              </div>
              <div id="routine-result" style={{ display: "none" }}>
                  <h3 style={{ textAlign: "center", color: "var(--primary)", marginBottom: "2rem" }}>✨ Your Personalized Routine</h3>
                  <div className="routine-cards">
                      <div className="routine-card">
                          <div className="routine-card-header">☀️ Morning Routine</div>
                          <ul id="morning-routine"></ul>
                      </div>
                      <div className="routine-card">
                          <div className="routine-card-header">🌙 Night Routine</div>
                          <ul id="night-routine"></ul>
                      </div>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "2rem" }}><button onClick={() => window.resetQuiz()} className="btn-outline">Try
                          Again</button></div>
              </div>
              <div className="quiz-progress">
                  <div id="quiz-bar" style={{ width: "0%" }}></div>
              </div>
          </div>
      </section>
    </>
  );
}
