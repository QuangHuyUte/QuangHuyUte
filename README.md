<div align="center">
  <img src="./assets/header.svg" width="100%" alt="Bui Quang Huy — Applied AI Engineer" />
</div>

<div align="center">
  <a href="https://github.com/QuangHuyUte"><img src="https://img.shields.io/badge/GitHub-QuangHuyUte-111827?style=flat-square&logo=github" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/quang-huy-9814b1388/"><img src="https://img.shields.io/badge/LinkedIn-Quang_Huy-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://www.facebook.com/WangHuy70s"><img src="https://img.shields.io/badge/Facebook-WangHuy70s-0866FF?style=flat-square&logo=facebook&logoColor=white" alt="Facebook" /></a>
  <a href="mailto:huygialai2005@gmail.com"><img src="https://img.shields.io/badge/Email-Let's_talk-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  <img src="https://komarev.com/ghpvc/?username=QuangHuyUte&style=flat-square&color=22d3ee&label=PROFILE+VIEWS" alt="Profile views" />
</div>

<p align="center">
  <a href="#selected-work">Selected work</a> ·
  <a href="#toolkit">Toolkit</a> ·
  <a href="#journey">Journey</a> ·
  <a href="#live-profile-metrics">Live metrics</a>
</p>

## Hello — I'm Huy

I'm a fourth-year Information Technology student at **Ho Chi Minh City University of Technology and Education**, focused on applied AI. I enjoy the full path from a research question to a system someone can inspect, test and actually use.

<table>
  <tr>
    <td width="25%"><strong>Research</strong><br/>Multimodal learning, SER and recommendation</td>
    <td width="25%"><strong>LLM systems</strong><br/>QLoRA, Hybrid RAG and structured outputs</td>
    <td width="25%"><strong>Engineering</strong><br/>APIs, data pipelines and product interfaces</td>
    <td width="25%"><strong>Collaboration</strong><br/>Team lead and Product Owner experience</td>
  </tr>
</table>

> My rule of thumb: let models handle ambiguity; let validated code own facts, numbers and safety boundaries.

## Selected work

### 01 · Acoustic–Text Fusion for Speech Emotion Recognition

Led a three-person project that combines multi-branch acoustic features and transcripts with attention for emotion classification plus Valence–Arousal–Dominance regression. On 10-fold IEMOCAP evaluation, the system reached **74.02% WA**, **74.64% UAR**, **74.05% Macro-F1** and **0.661 mean CCC**.

<a href="https://github.com/QuangHuyUte/An-Acoustic-Text-Fusion-Approach-for-Predicting-Categorical-and-Dimensional-Speech-Emotions">
  <img src="https://github.com/QuangHuyUte/An-Acoustic-Text-Fusion-Approach-for-Predicting-Categorical-and-Dimensional-Speech-Emotions/raw/main/assets/final_benchmark_model_animated.gif" width="100%" alt="Animated acoustic-text fusion architecture" />
</a>

[`Multimodal fusion` · `Emotion2Vec` · `Attention` · `Multi-task learning` →](https://github.com/QuangHuyUte/An-Acoustic-Text-Fusion-Approach-for-Predicting-Categorical-and-Dimensional-Speech-Emotions)

---

### 02 · PHQ-9 Depression Intake Clinical Copilot

Led a two-person, clinician-facing research prototype for structured PHQ-9 intake. It uses cue extraction, intent/fact routing, evidence retrieval, deterministic validation and three small QLoRA adapters for patient simulation, follow-up generation and keyword-cue extraction.

<table>
  <tr>
    <td width="42%"><a href="https://github.com/QuangHuyUte/PHQ_9_Based_Depression_Intake_Clinical_Copilot"><img src="https://raw.githubusercontent.com/QuangHuyUte/PHQ_9_Based_Depression_Intake_Clinical_Copilot/main/reports/Doc/generated_assets/readme/readme_portrait_intake_screen.png" alt="PHQ-9 intake screen" /></a></td>
    <td width="58%"><a href="https://github.com/QuangHuyUte/PHQ_9_Based_Depression_Intake_Clinical_Copilot"><img src="https://raw.githubusercontent.com/QuangHuyUte/PHQ_9_Based_Depression_Intake_Clinical_Copilot/main/reports/Doc/generated_assets/readme/readme_chat_support_screen.png" alt="Clinical support workspace" /></a></td>
  </tr>
</table>

<sub>Research and decision-support prototype only — not a diagnostic tool or a replacement for a clinician.</sub>

[`Human-centered AI` · `QLoRA` · `Hybrid retrieval` · `Rules + evidence` →](https://github.com/QuangHuyUte/PHQ_9_Based_Depression_Intake_Clinical_Copilot)

---

### 03 · BM3Fusion Multimodal Recommendation

Extended a BM3-style backbone for Amazon Baby Products with text–image item representations, sampled-negative BPR loss and collaborative/textual/visual signal fusion. The controlled experiments achieved **Test R@20 0.0551**, **NDCG@20 0.0253** and **R@50 0.0935**.

<a href="https://github.com/QuangHuyUte/NCKH_BM3">
  <img src="https://github.com/QuangHuyUte/NCKH_BM3/raw/main/docs/assets/bm3fusion_pipeline.png" width="100%" alt="BM3Fusion recommendation pipeline" />
</a>

[`PyTorch` · `CLIP` · `LightGCN` · `BPR` · `Top-k evaluation` →](https://github.com/QuangHuyUte/NCKH_BM3)

---

### 04 · Physics Question Answering with Qwen

An individual Qwen-based pipeline for preprocessing, QLoRA instruction tuning, inference and evaluation across conceptual and numerical physics questions. Routing, schema parsing and deterministic solvers keep the final formula, number and unit auditable.

[`Qwen2.5` · `QLoRA` · `Structured outputs` · `Deterministic solvers` →](https://github.com/QuangHuyUte/physical_questions_qwen)

## More things I've built

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/QuangHuyUte/weighted-astar-visualizer">Weighted A* Visualizer</a></h3>
      <p>An interactive Pygame laboratory for A*, Weighted A*, multiple heuristics, monster costs, two-leg pathfinding and animated map editing.</p>
      <a href="https://github.com/QuangHuyUte/weighted-astar-visualizer"><img src="https://github.com/QuangHuyUte/weighted-astar-visualizer/raw/main/assets/canva_preview.png" alt="Weighted A star visualizer preview" /></a>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/QuangHuyUte/Movie-Revenue-Rating-SVM-vs-XGBoost">Film Score & Revenue AI</a></h3>
      <p>A hybrid SVC/XGBoost/SVR pipeline for film revenue and rating prediction with leakage control, explainability and a Streamlit inference station.</p>
      <a href="https://github.com/QuangHuyUte/Movie-Revenue-Rating-SVM-vs-XGBoost"><img src="https://github.com/QuangHuyUte/Movie-Revenue-Rating-SVM-vs-XGBoost/raw/main/Images/Canva.png" alt="Film revenue prediction project" /></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top"><h3><a href="https://github.com/QuangHuyUte/Employee_Assessment_System">Employee Assessment System</a></h3><p>Product Owner in an eight-person Scrum team; also built layered backend modules and relational data models for role-based assessments and AI-assisted feedback.</p></td>
    <td width="50%" valign="top"><h3><a href="https://github.com/QuangHuyUte/Hotel_Booking_App">Hotel Booking App</a></h3><p>A Java application with a Supabase-backed data layer, practical booking workflows and product-focused UI.</p></td>
  </tr>
</table>

## Toolkit

<p>
  <img src="https://img.shields.io/badge/Python-111827?style=for-the-badge&logo=python&logoColor=FACC15" alt="Python" />
  <img src="https://img.shields.io/badge/PyTorch-111827?style=for-the-badge&logo=pytorch&logoColor=EE4C2C" alt="PyTorch" />
  <img src="https://img.shields.io/badge/Hugging_Face-111827?style=for-the-badge&logo=huggingface&logoColor=FFD21E" alt="Hugging Face" />
  <img src="https://img.shields.io/badge/FastAPI-111827?style=for-the-badge&logo=fastapi&logoColor=009688" alt="FastAPI" />
  <img src="https://img.shields.io/badge/JavaScript-111827?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/SQL-111827?style=for-the-badge&logo=postgresql&logoColor=60A5FA" alt="SQL" />
  <img src="https://img.shields.io/badge/MongoDB-111827?style=for-the-badge&logo=mongodb&logoColor=47A248" alt="MongoDB" />
  <img src="https://img.shields.io/badge/C%23-111827?style=for-the-badge&logo=dotnet&logoColor=8B5CF6" alt="C sharp" />
</p>

`LoRA / QLoRA` · `Hybrid RAG` · `Prompt engineering` · `Structured outputs` · `REST APIs` · `Pandas / NumPy` · `PostgreSQL / MySQL` · `Git / GitHub`

## Journey

<div align="center">
  <img src="./assets/journey.svg" width="100%" alt="Learning and building journey from 2023 to 2027" />
</div>

## Live profile metrics

<div align="center">
  <img src="./metrics/profile.svg" width="100%" alt="Live GitHub profile metrics" />
</div>

<sub>Rendered from the GitHub API by a dependency-free JavaScript script and refreshed automatically with GitHub Actions.</sub>

<div align="center">
  <img src="./assets/footer.svg" width="100%" alt="Animated gradient divider" />
  <br />
  <strong>Build with curiosity. Measure with care. Explain with clarity.</strong>
  <br /><br />
  <a href="mailto:huygialai2005@gmail.com">Let's build something useful together.</a>
</div>
