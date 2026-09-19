/**
 * منصة اختبارات نافس والقدرات والتحصيلي - مدارس الشارقة الأهلية
 * جاهز للنشر الفوري على Render.com
 */

const express = require('express');
const app = express();

app.use(express.json());

// 1. بنك الأسئلة المتكامل
const generateQuestions = () => {
  const list = [];
  let idCounter = 1;

  // نافس - ثالث ابتدائي
  for (let i = 1; i <= 10; i++) {
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف الثالث الابتدائي',
      testType: 'نافس',
      subject: 'رياضيات',
      questionText: `سؤال رياضيات (${i}): ما الكسر الذي يعبر عن الجزء المظلل في المربع المقسم لـ 4 أجزاء متساوية وتم تظليل ${i % 3 + 1} منها؟`,
      options: [`\\dfrac{1}{4}`, `\\dfrac{2}{4}`, `\\dfrac{3}{4}`, `\\dfrac{4}{4}`],
      correctAnswer: (i % 3),
      imageUrl: i === 1 ? 'https://via.placeholder.com/300x150/3D0B37/FFFFFF?text=شكل+الجزء+المظلل' : null
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف الثالث الابتدائي',
      testType: 'نافس',
      subject: 'قراءة',
      questionText: `سؤال قراءة (${i}): مرادف كلمة "الابتكار" في جملة "الابتكار يسهم في تقدم الوطن" هو:`,
      options: ['التقليد', 'الإبداع والابتكار', 'الكسل', 'الإهمال'],
      correctAnswer: 1
    });
  }

  // نافس - سادس ابتدائي
  for (let i = 1; i <= 10; i++) {
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف السادس الابتدائي',
      testType: 'نافس',
      subject: 'رياضيات',
      questionText: `سؤال رياضيات (${i}): أوجد قيمة الناتج للعملية التالية: $\\dfrac{${i*2}}{2} + \\dfrac{1}{2}$`,
      options: [`\\dfrac{${i*2 + 1}}{2}`, `\\dfrac{${i}}{2}`, `\\dfrac{1}{4}`, `\\dfrac{3}{2}`],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف السادس الابتدائي',
      testType: 'نافس',
      subject: 'علوم',
      questionText: `سؤال علوم (${i}): أي من الخيارات التالية يُعد مثالاً على التغير الكيميائي؟`,
      options: ['صدأ المسمار الحديدي', 'انصهار مكعب الثلج', 'تقطيع ورقة', 'تبخر الماء'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف السادس الابتدائي',
      testType: 'نافس',
      subject: 'قراءة',
      questionText: `سؤال قراءة (${i}): الفكرة الرئيسة في النص الداعي للاجتهاد والتفوق هي:`,
      options: ['أهمية المثابرة في طلب العلم', 'فوائد النوم المبكر', 'طرق ممارسة الرياضة', 'أهمية السفر'],
      correctAnswer: 0
    });
  }

  // ثانوي - ثاني ثانوي (قدرات)
  for (let i = 1; i <= 10; i++) {
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثاني ثانوي',
      testType: 'قدرات',
      subject: 'كمي',
      questionText: `سؤال قدرات كمي (${i}): ما قيمة المقدار $\\sqrt{81} + 2^{${(i%3)+2}}$؟`,
      options: [`${9 + Math.pow(2, (i%3)+2)}`, `${8 + Math.pow(2, (i%3)+2)}`, '15', '20'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثاني ثانوي',
      testType: 'قدرات',
      subject: 'لفظي',
      questionText: `سؤال تناظر لفظي (${i}): (رئة : تنفس)`,
      options: ['عين : رؤية', 'أذن : سماعة', 'قلب : ضخ', 'قدم : حذاء'],
      correctAnswer: 0
    });
  }

  // ثانوي - ثالث ثانوي (قدرات وتحصيلي)
  for (let i = 1; i <= 10; i++) {
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'قدرات',
      subject: 'كمي',
      questionText: `سؤال قدرات كمي (${i}): أوجد قيمة السين إذا كان $\\dfrac{x}{4} = \\dfrac{${i*3}}{2}$`,
      options: [`${i*6}`, `${i*3}`, `${i*2}`, `${i}`],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'قدرات',
      subject: 'لفظي',
      questionText: `إكمال الجمل (${i}): "إن الحسابات الدقيقة تساعد في اتخاذ القرارات ..... لتجنب المشكلات."`,
      options: ['السليمة', 'العشوائية', 'الخاطئة', 'السريعة'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'فيزياء',
      questionText: `فيزياء (${i}): ما مقدار القوة العمودية المؤثرة على جسم كتلته $5\\,\\text{kg}$؟ ($g = 9.8\\,\\text{m/s}^2$)`,
      options: ['49 N', '9.8 N', '5 N', '0 N'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'كيمياء',
      questionText: `كيمياء (${i}): ما معامل الماء $X$ لوزن التفاعل التالي: $2\\text{H}_2 + \\text{O}_2 \\rightarrow X\\text{H}_2\\text{O}$؟`,
      options: ['2', '1', '3', '4'],
      correctAnswer: 0,
      imageUrl: i === 1 ? 'https://via.placeholder.com/350x120/00AEEF/FFFFFF?text=التفاعل+الكيميائي+الموزون' : null
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'أحياء وعلم بيئة',
      questionText: `أحياء (${i}): أي المخلوقات التالية يُعد من المنتجات في الهرم الغذائي؟`,
      options: ['النباتات الخضراء', 'الأبقار', 'الأسود', 'الفطريات'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'رياضيات',
      questionText: `رياضيات تحصيلي (${i}): ما مشتقة الدالة $f(x) = ${i}x^2 + 5x - 2$؟`,
      options: [`${i*2}x + 5`, `${i}x + 5`, `${i*2}x^2`, '5'],
      correctAnswer: 0
    });
  }

  return list;
};

let questionBank = generateQuestions();

// 2. واجهات برمجة التطبيقات
app.get('/api/questions', (req, res) => {
  const { stage, grade, testType, subject } = req.query;
  let filtered = questionBank;
  if (stage) filtered = filtered.filter(q => q.stage === stage);
  if (grade) filtered = filtered.filter(q => q.grade === grade);
  if (testType) filtered = filtered.filter(q => q.testType === testType);
  if (subject && subject !== 'نموذج شامل') {
    filtered = filtered.filter(q => q.subject === subject);
  }
  res.json(filtered);
});

app.post('/api/submit', (req, res) => {
  const { userAnswers } = req.body;
  let score = 0;
  const total = Object.keys(userAnswers || {}).length;

  Object.keys(userAnswers || {}).forEach(qId => {
    const question = questionBank.find(q => q.id === parseInt(qId));
    if (question && question.correctAnswer === userAnswers[qId]) {
      score += 1;
    }
  });

  res.json({
    score,
    total,
    percentage: total > 0 ? Math.round((score / total) * 100) : 0
  });
});

// 3. واجهة الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مدارس الشارقة الأهلية - منصة الاختبارات</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <style>
    :root { --purple: #3D0B37; --magenta: #E5007D; --cyan: #00AEEF; --gold: #F3AC10; --bg: #F8F9FA; }
    body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; background-color: var(--bg); direction: rtl; }
    header { background: var(--purple); color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
    .logo-title { font-size: 20px; color: var(--gold); font-weight: bold; }
    .tagline { font-size: 12px; color: var(--cyan); }
    .role-btn { padding: 8px 16px; border-radius: 20px; border: none; cursor: pointer; font-weight: bold; color: white; background: transparent; }
    .role-btn.active { background: var(--magenta); }
    .container { max-width: 950px; margin: 25px auto; padding: 0 20px; }
    .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 20px; }
    .question-card { border-right: 5px solid var(--magenta); }
    .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px; }
    .option-btn { padding: 14px; border-radius: 8px; border: 1px solid #ddd; background: white; text-align: right; cursor: pointer; font-size: 16px; }
    .option-btn.selected { border-color: var(--magenta); background: rgba(229, 0, 125, 0.08); font-weight: bold; }
    .btn-submit { width: 100%; padding: 14px; background: var(--magenta); color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; }
    select { padding: 10px; border-radius: 6px; border: 1px solid #ccc; font-size: 15px; }
    .filter-group { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 180px; }
    .filter-label { font-weight: bold; color: var(--purple); font-size: 13px; }
    .katex { font-size: 1.25em !important; }
    .q-image { max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0; border: 1px solid #eee; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect } = React;
    function App() {
      const [role, setRole] = useState('student');
      const [stage, setStage] = useState('ابتدائي');
      const [grade, setGrade] = useState('الصف الثالث الابتدائي');
      const [testType, setTestType] = useState('نافس');
      const [subject, setSubject] = useState('نموذج شامل');
      const [questions, setQuestions] = useState([]);
      const [userAnswers, setUserAnswers] = useState({});
      const [result, setResult] = useState(null);

      const gradesByStage = { 'ابتدائي': ['الصف الثالث الابتدائي', 'الصف السادس الابتدائي'], 'ثانوي': ['الصف الثاني ثانوي', 'الصف الثالث ثانوي'] };
      const testsByGrade = { 'الصف الثالث الابتدائي': ['نافس'], 'الصف السادس الابتدائي': ['نافس'], 'الصف الثاني ثانوي': ['قدرات'], 'الصف الثالث ثانوي': ['قدرات', 'تحصيلي'] };
      const subjectsByTest = {
        'الصف الثالث الابتدائي_نافس': ['نموذج شامل', 'رياضيات', 'قراءة'],
        'الصف السادس الابتدائي_نافس': ['نموذج شامل', 'رياضيات', 'علوم', 'قراءة'],
        'الصف الثاني ثانوي_قدرات': ['نموذج شامل', 'كمي', 'لفظي'],
        'الصف الثالث ثانوي_قدرات': ['نموذج شامل', 'كمي', 'لفظي'],
        'الصف الثالث ثانوي_تحصيلي': ['نموذج شامل', 'فيزياء', 'كيمياء', 'أحياء وعلم بيئة', 'رياضيات']
      };

      const handleStageChange = (e) => {
        const st = e.target.value; setStage(st);
        const fg = gradesByStage[st][0]; setGrade(fg);
        const ft = testsByGrade[fg][0]; setTestType(ft); setSubject('نموذج شامل');
      };
      const handleGradeChange = (e) => {
        const gr = e.target.value; setGrade(gr);
        const ft = testsByGrade[gr][0]; setTestType(ft); setSubject('نموذج شامل');
      };
      const handleTestTypeChange = (e) => { setTestType(e.target.value); setSubject('نموذج شامل'); };

      const loadQuestions = () => {
        fetch(\`/api/questions?stage=\${stage}&grade=\${grade}&testType=\${testType}&subject=\${subject}\`)
          .then(res => res.json())
          .then(data => { setQuestions(data); setUserAnswers({}); setResult(null); });
      };
      useEffect(() => { loadQuestions(); }, [stage, grade, testType, subject]);

      const submitQuiz = () => {
        fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userAnswers }) })
        .then(res => res.json()).then(data => setResult(data));
      };

      const renderMath = (text) => {
        if (!text) return '';
        const parts = text.split('$');
        return parts.map((part, i) => {
          if (i % 2 === 1) {
            try {
              const html = katex.renderToString(part, { throwOnError: false });
              return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
            } catch (e) { return part; }
          }
          return <span key={i}>{part}</span>;
        });
      };

      const availableSubjects = subjectsByTest[\`\${grade}_\${testType}\`] || ['نموذج شامل'];

      return (
        <div>
          <header>
            <div>
              <div className="logo-title">مدارس الشارقة الأهلية</div>
              <div className="tagline">وصلنا... ومكملين | منصة نافس والقدرات والتحصيلي</div>
            </div>
            <div>
              <button className={\`role-btn \${role==='student'?'active':''}\`} onClick={()=>setRole('student')}>الطالب</button>
              <button className={\`role-btn \${role==='teacher'?'active':''}\`} onClick={()=>setRole('teacher')}>المعلم</button>
              <button className={\`role-btn \${role==='admin'?'active':''}\`} onClick={()=>setRole('admin')}>المدير (Admin)</button>
            </div>
          </header>
          <div className="container">
            {role === 'student' && (
              <div>
                <div className="card">
                  <h3 style={{marginTop:0, color:'var(--purple)'}}>تحديد نوع الاختبار</h3>
                  <div style={{display:'flex', gap:'15px', flexWrap:'wrap'}}>
                    <div className="filter-group"><span className="filter-label">1. المرحلة</span><select value={stage} onChange={handleStageChange}><option value="ابتدائي">المرحلة الابتدائية</option><option value="ثانوي">المرحلة الثانوية</option></select></div>
                    <div className="filter-group"><span className="filter-label">2. الصف الدراسي</span><select value={grade} onChange={handleGradeChange}>{gradesByStage[stage].map(g => <option key={g} value={g}>{g}</option>)}</select></div>
                    <div className="filter-group"><span className="filter-label">3. نوع الاختبار</span><select value={testType} onChange={handleTestTypeChange}>{testsByGrade[grade].map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                    <div className="filter-group"><span className="filter-label">4. المادة / القسم</span><select value={subject} onChange={e => setSubject(e.target.value)}>{availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                  </div>
                </div>
                {questions.map((q, idx) => (
                  <div key={q.id} className="card question-card">
                    <h4 style={{marginTop:0, color:'var(--purple)', fontSize:'18px'}}>س{idx+1}: {renderMath(q.questionText)}</h4>
                    {q.imageUrl && <img src={q.imageUrl} alt="سؤال" className="q-image" />}
                    <div className="options-grid">
                      {q.options.map((opt, oIdx) => (
                        <button key={oIdx} className={\`option-btn \${userAnswers[q.id]===oIdx?'selected':''}\`} onClick={()=>setUserAnswers({...userAnswers, [q.id]: oIdx})}>{renderMath(opt)}</button>
                      ))}
                    </div>
                  </div>
                ))}
                {questions.length > 0 && <button className="btn-submit" onClick={submitQuiz}>تسليم ورقة الاختبار وتصحيح المحاولة</button>}
                {result && (
                  <div className="card" style={{borderTop:'5px solid var(--gold)', marginTop:'20px'}}>
                    <h3 style={{color:'var(--purple)', marginTop:0}}>نتيجة المحاولة</h3>
                    <p style={{fontSize:'22px'}}>النسبة المئوية: <strong style={{color:'var(--magenta)'}}>{result.percentage}%</strong></p>
                    <p>الإجابات الصحيحة: {result.score} من أصل {result.total}</p>
                    <button className="btn-submit" style={{background:'var(--cyan)', width:'auto'}} onClick={loadQuestions}>إعادة الاختبار بمحاولة جديدة</button>
                  </div>
                )}
              </div>
            )}
            {role === 'teacher' && <div className="card"><h3>لوحة المعلم</h3><p>إدخال أسئلة بنك الاختبارات والملاحظات.</p></div>}
            {role === 'admin' && <div className="card"><h3>لوحة المدير</h3><p>الإحصائيات العامة للمدارس.</p></div>}
          </div>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>
  `);
});

// 4. ربط المنفذ تلقائياً بـ Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));