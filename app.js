/**
 * منصة اختبارات نافس والقدرات والتحصيلي - مدارس الشارقة الأهلية
 * النسخة المحدثة بالكامل: معالجة شاقولية جبارة للكسور والجذور + لوحات معلم ومدير تفاعلية بالكامل
 */

const express = require('express');
const app = express();

app.use(express.json());

// 1. بنك الأسئلة المتكامل (مُعزز بكسور وجذور ورسومات)
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
      questionText: `ما الكسر الذي يمثل الجزء المظلل إذا كان لدينا الشكل الآتي وتم تظليل ${i % 3 + 1} أجزاء من 4؟`,
      options: [`\\dfrac{1}{4}`, `\\dfrac{2}{4}`, `\\dfrac{3}{4}`, `\\dfrac{4}{4}`],
      correctAnswer: (i % 3),
      imageUrl: i === 1 ? 'https://via.placeholder.com/300x120/3D0B37/FFFFFF?text=الشكل+المظلل' : null
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف الثالث الابتدائي',
      testType: 'نافس',
      subject: 'قراءة',
      questionText: `مرادف كلمة "الابتكار" في جملة "الابتكار يسهم في تقدم الوطن" هو:`,
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
      questionText: `أوجد ناتج العملية التالية: $\\dfrac{${i*2}}{3} + \\dfrac{1}{3}$`,
      options: [`\\dfrac{${i*2 + 1}}{3}`, `\\dfrac{${i}}{3}`, `\\dfrac{2}{3}`, `\\dfrac{5}{3}`],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف السادس الابتدائي',
      testType: 'نافس',
      subject: 'علوم',
      questionText: `أي التغيرات التالية يُعد تغيراً كيميائياً؟`,
      options: ['صدأ المسمار الحديدي', 'انصهار مكعب الثلج', 'تقطيع ورقة', 'تبخر الماء'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف السادس الابتدائي',
      testType: 'نافس',
      subject: 'قراءة',
      questionText: `الفكرة الرئيسة في النص الداعي للاجتهاد والتفوق هي:`,
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
      questionText: `ما قيمة المقدار التالي: $\\sqrt{81} + 2^{${(i%3)+2}}$ ؟`,
      options: [`${9 + Math.pow(2, (i%3)+2)}`, `${8 + Math.pow(2, (i%3)+2)}`, '15', '20'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثاني ثانوي',
      testType: 'قدرات',
      subject: 'لفظي',
      questionText: `تناظر لفظي: (رئة : تنفس)`,
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
      questionText: `إذا كانت $\\dfrac{x}{4} = \\dfrac{${i*3}}{2}$ ، فما قيمة $x$؟`,
      options: [`${i*6}`, `${i*3}`, `${i*2}`, `${i}`],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'قدرات',
      subject: 'لفظي',
      questionText: `إكمال الجمل: "إن الحسابات الدقيقة تساعد في اتخاذ القرارات ..... لتجنب المشكلات."`,
      options: ['السليمة', 'العشوائية', 'الخاطئة', 'السريعة'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'فيزياء',
      questionText: `ما مقدار القوة العمودية المؤثرة على جسم كتلته $5\\,\\text{kg}$؟ ($g = 9.8\\,\\text{m/s}^2$)`,
      options: ['49 N', '9.8 N', '5 N', '0 N'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'كيمياء',
      questionText: `ما المعامل $X$ الموزون للتفاعل التالي: $2\\text{H}_2 + \\text{O}_2 \\rightarrow X\\text{H}_2\\text{O}$ ؟`,
      options: ['2', '1', '3', '4'],
      correctAnswer: 0,
      imageUrl: i === 1 ? 'https://via.placeholder.com/350x100/00AEEF/FFFFFF?text=معادلة+التفاعل+الكيميائي' : null
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'أحياء وعلم بيئة',
      questionText: `أي المخلوقات التالية يُعد من المنتجات في الهرم الغذائي؟`,
      options: ['النباتات الخضراء', 'الأبقار', 'الأسود', 'الفطريات'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'رياضيات',
      questionText: `ما مشتقة الدالة التالية: $f(x) = ${i}x^2 + 5x - 2$ ؟`,
      options: [`${i*2}x + 5`, `${i}x + 5`, `${i*2}x^2`, '5'],
      correctAnswer: 0
    });
  }

  return list;
};

let questionBank = generateQuestions();

// 2. واجهات برمجية التطبيقات (APIs)
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

app.post('/api/questions/add', (req, res) => {
  const newQ = { id: questionBank.length + 1, ...req.body };
  questionBank.push(newQ);
  res.status(201).json({ message: 'تمت إضافة السؤال بنجاح', question: newQ });
});

// 3. الواجهة الشاملة والحل النهائي لمكتبة KaTeX واللوحات الثلاث
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مدارس الشارقة الأهلية - منصة الاختبارات الذكية</title>

  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- KaTeX + Auto Render لدعم وتكبير الكسور والجذور تلقائياً -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    :root { --purple: #3D0B37; --magenta: #E5007D; --cyan: #00AEEF; --gold: #F3AC10; --bg: #F8F9FA; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, sans-serif; margin: 0; background-color: var(--bg); direction: rtl; }
    header { background: var(--purple); color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
    .logo-title { font-size: 20px; color: var(--gold); font-weight: bold; }
    .tagline { font-size: 12px; color: var(--cyan); }
    .role-btn { padding: 8px 16px; border-radius: 20px; border: none; cursor: pointer; font-weight: bold; color: white; background: transparent; transition: 0.3s; }
    .role-btn.active { background: var(--magenta); }
    .container { max-width: 950px; margin: 25px auto; padding: 0 20px; }
    .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 20px; }
    .question-card { border-right: 5px solid var(--magenta); }
    .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px; }
    .option-btn { padding: 14px; border-radius: 8px; border: 1px solid #ddd; background: white; text-align: right; cursor: pointer; font-size: 16px; min-height: 50px; display: flex; align-items: center; justify-content: flex-start; }
    .option-btn.selected { border-color: var(--magenta); background: rgba(229, 0, 125, 0.08); font-weight: bold; }
    .btn-submit { width: 100%; padding: 14px; background: var(--magenta); color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; }
    select, input, textarea { padding: 10px; border-radius: 6px; border: 1px solid #ccc; font-size: 15px; }
    .filter-group { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 180px; }
    .filter-label { font-weight: bold; color: var(--purple); font-size: 13px; }
    
    /* تنسيقات الكسور والجذور لجعلها واضحة جداً وبأحجام شاقولية سهلة القراءة */
    .katex { font-size: 1.35em !important; line-height: 1.2; }
    .katex-display { margin: 0.5em 0 !important; }
    .q-image { max-width: 100%; height: auto; border-radius: 8px; margin: 12px 0; border: 1px solid #eee; }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center; }
    .stat-box { padding: 20px; border-radius: 8px; background: #fff; border: 1px solid #eee; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useRef } = React;

    function MathText({ text }) {
      const containerRef = useRef();

      useEffect(() => {
        if (containerRef.current && window.renderMathInElement) {
          window.renderMathInElement(containerRef.current, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ],
            throwOnError: false
          });
        }
      }, [text]);

      return <span ref={containerRef}>{text}</span>;
    }

    function App() {
      const [role, setRole] = useState('student');

      // شجرة التنقل
      const [stage, setStage] = useState('ابتدائي');
      const [grade, setGrade] = useState('الصف الثالث الابتدائي');
      const [testType, setTestType] = useState('نافس');
      const [subject, setSubject] = useState('نموذج شامل');

      const [questions, setQuestions] = useState([]);
      const [userAnswers, setUserAnswers] = useState({});
      const [result, setResult] = useState(null);

      // حالة لوحة المعلم
      const [qStage, setQStage] = useState('ثانوي');
      const [qGrade, setQGrade] = useState('الصف الثالث ثانوي');
      const [qTestType, setQTestType] = useState('تحصيلي');
      const [qSubject, setQSubject] = useState('رياضيات');
      const [qText, setQText] = useState('');
      const [qImageUrl, setQImageUrl] = useState('');
      const [options, setOptions] = useState(['', '', '', '']);
      const [correctIndex, setCorrectIndex] = useState(0);

      const gradesByStage = {
        'ابتدائي': ['الصف الثالث الابتدائي', 'الصف السادس الابتدائي'],
        'ثانوي': ['الصف الثاني ثانوي', 'الصف الثالث ثانوي']
      };

      const testsByGrade = {
        'الصف الثالث الابتدائي': ['نافس'],
        'الصف السادس الابتدائي': ['نافس'],
        'الصف الثاني ثانوي': ['قدرات'],
        'الصف الثالث ثانوي': ['قدرات', 'تحصيلي']
      };

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

      const loadQuestions = () => {
        fetch(\`/api/questions?stage=\${stage}&grade=\${grade}&testType=\${testType}&subject=\${subject}\`)
          .then(res => res.json())
          .then(data => { setQuestions(data); setUserAnswers({}); setResult(null); });
      };

      useEffect(() => { loadQuestions(); }, [stage, grade, testType, subject]);

      const submitQuiz = () => {
        fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userAnswers })
        })
        .then(res => res.json())
        .then(data => setResult(data));
      };

      // إضافة خيارات إضافية بالبدائل
      const handleAddOption = () => {
        if (options.length < 6) setOptions([...options, '']);
      };

      const handleRemoveOption = () => {
        if (options.length > 2) {
          setOptions(options.slice(0, -1));
          if (correctIndex >= options.length - 1) setCorrectIndex(0);
        }
      };

      const handleAddQuestionSubmit = (e) => {
        e.preventDefault();
        fetch('/api/questions/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            stage: qStage,
            grade: qGrade,
            testType: qTestType,
            subject: qSubject,
            questionText: qText,
            imageUrl: qImageUrl || null,
            options: options,
            correctAnswer: parseInt(correctIndex)
          })
        })
        .then(res => res.json())
        .then(() => {
          alert('تم حفظ السؤال بنجاح في بنك الأسئلة!');
          setQText(''); setQImageUrl(''); setOptions(['', '', '', '']);
          loadQuestions();
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
            {/* لوحة الطالب */}
            {role === 'student' && (
              <div>
                <div className="card">
                  <h3 style={{marginTop:0, color:'var(--purple)'}}>اختيار نوع الاختبار</h3>
                  <div style={{display:'flex', gap:'15px', flexWrap:'wrap'}}>
                    <div className="filter-group"><span className="filter-label">1. المرحلة</span><select value={stage} onChange={handleStageChange}><option value="ابتدائي">المرحلة الابتدائية</option><option value="ثانوي">المرحلة الثانوية</option></select></div>
                    <div className="filter-group"><span className="filter-label">2. الصف الدراسي</span><select value={grade} onChange={handleGradeChange}>{gradesByStage[stage].map(g => <option key={g} value={g}>{g}</option>)}</select></div>
                    <div className="filter-group"><span className="filter-label">3. نوع الاختبار</span><select value={testType} onChange={e=>{setTestType(e.target.value); setSubject('نموذج شامل');}}>{testsByGrade[grade].map(t => <option key={t} value={t}>{t}</option>)}</select></div>
                    <div className="filter-group"><span className="filter-label">4. المادة / القسم</span><select value={subject} onChange={e => setSubject(e.target.value)}>{availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                  </div>
                </div>

                {questions.map((q, idx) => (
                  <div key={q.id} className="card question-card">
                    <h4 style={{marginTop:0, color:'var(--purple)', fontSize:'18px'}}>
                      س{idx+1}: <MathText text={q.questionText} />
                    </h4>
                    {q.imageUrl && <img src={q.imageUrl} alt="سؤال مصور" className="q-image" />}
                    <div className="options-grid">
                      {q.options.map((opt, oIdx) => (
                        <button key={oIdx} className={\`option-btn \${userAnswers[q.id]===oIdx?'selected':''}\`} onClick={()=>setUserAnswers({...userAnswers, [q.id]: oIdx})}>
                          <MathText text={opt} />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {questions.length > 0 && <button className="btn-submit" onClick={submitQuiz}>إنهاء ورقة الاختبار وتصحيح المحاولة</button>}

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

            {/* لوحة المعلم الكاملة */}
            {role === 'teacher' && (
              <div className="card">
                <h3 style={{color:'var(--purple)', marginTop:0}}>لوحة المعلم - إدخال وتحديث الأسئلة</h3>
                <form onSubmit={handleAddQuestionSubmit}>
                  <div style={{display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'15px'}}>
                    <div className="filter-group"><label className="filter-label">المرحلة</label><select value={qStage} onChange={e=>setQStage(e.target.value)}><option value="ابتدائي">ابتدائي</option><option value="ثانوي">ثانوي</option></select></div>
                    <div className="filter-group"><label className="filter-label">الصف</label><select value={qGrade} onChange={e=>setQGrade(e.target.value)}><option value="الصف الثالث الابتدائي">الصف الثالث الابتدائي</option><option value="الصف السادس الابتدائي">الصف السادس الابتدائي</option><option value="الصف الثاني ثانوي">الصف الثاني ثانوي</option><option value="الصف الثالث ثانوي">الصف الثالث ثانوي</option></select></div>
                    <div className="filter-group"><label className="filter-label">نوع الاختبار</label><select value={qTestType} onChange={e=>setQTestType(e.target.value)}><option value="نافس">نافس</option><option value="قدرات">قدرات</option><option value="تحصيلي">تحصيلي</option></select></div>
                    <div className="filter-group"><label className="filter-label">المادة</label><input type="text" value={qSubject} onChange={e=>setQSubject(e.target.value)} placeholder="مثال: كيمياء، رياضيات..." required /></div>
                  </div>

                  <div style={{marginBottom:'15px'}}>
                    <label className="filter-label">نص السؤال (استخدم $\\dfrac&#123;أ&#125;&#123;ب&#125;$ للكسور أو $\\sqrt&#123;س&#125;$ للجذور):</label>
                    <textarea style={{width:'100%', height:'80px', marginTop:'5px'}} value={qText} onChange={e=>setQText(e.target.value)} placeholder="اكتب نص السؤال هنا..." required />
                  </div>

                  <div style={{marginBottom:'15px'}}>
                    <label className="filter-label">رابط صورة للسؤال (اختياري):</label>
                    <input style={{width:'100%', marginTop:'5px'}} type="text" value={qImageUrl} onChange={e=>setQImageUrl(e.target.value)} placeholder="https://example.com/image.png" />
                  </div>

                  <div style={{marginBottom:'15px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}>
                      <label className="filter-label">خيارات الإجابة (البدائل):</label>
                      <div>
                        <button type="button" onClick={handleAddOption} style={{padding:'4px 10px', marginLeft:'5px', background:'var(--cyan)', color:'#fff', border:'none', borderRadius:'4px', cursor:'pointer'}}>+ إضافة بديل</button>
                        <button type="button" onClick={handleRemoveOption} style={{padding:'4px 10px', background:'#ff4d4d', color:'#fff', border:'none', borderRadius:'4px', cursor:'pointer'}}>- حذف بديل</button>
                      </div>
                    </div>

                    {options.map((opt, i) => (
                      <div key={i} style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px'}}>
                        <input type="radio" name="correct" checked={correctIndex === i} onChange={()=>setCorrectIndex(i)} />
                        <input style={{flex:1}} type="text" value={opt} onChange={e=>{
                          const copy = [...options]; copy[i] = e.target.value; setOptions(copy);
                        }} placeholder={\`الخيار \${i+1}\`} required />
                        {correctIndex === i && <span style={{color:'green', fontSize:'12px', fontWeight:'bold'}}>الإجابة الصحيحة</span>}
                      </div>
                    ))}
                  </div>

                  <button className="btn-submit" type="submit">إضافة السؤال فوراً إلى بنك الأسئلة</button>
                </form>
              </div>
            )}

            {/* لوحة المدير (Admin) الكاملة */}
            {role === 'admin' && (
              <div>
                <div className="card">
                  <h3 style={{color:'var(--purple)', marginTop:0}}>لوحة الإدارة الرئيسية (Admin Dashboard)</h3>
                  <div className="stats-grid">
                    <div className="stat-box"><h4 style={{margin:0}}>إجمالي الأسئلة</h4><p style={{fontSize:'28px', color:'var(--magenta)', fontWeight:'bold'}}>{questionBank.length}</p></div>
                    <div className="stat-box"><h4 style={{margin:0}}>الصفوف المفعّلة</h4><p style={{fontSize:'28px', color:'var(--purple)', fontWeight:'bold'}}>4 صفوف</p></div>
                    <div className="stat-box"><h4 style={{margin:0}}>حالة النظام</h4><p style={{fontSize:'22px', color:'green', fontWeight:'bold'}}>نشط ومستقر 100%</p></div>
                  </div>
                </div>

                <div className="card">
                  <h3 style={{color:'var(--purple)', marginTop:0}}>إحصائيات وحصر أسئلة بنك المنصة</h3>
                  <p>توزيع الأسئلة الحالي بحسب نوع الاختبار والمرحلة:</p>
                  <ul>
                    <li><strong>اختبارات نافس (ابتدائي):</strong> {questionBank.filter(q=>q.testType==='نافس').length} سؤالاً</li>
                    <li><strong>اختبارات القدرات (ثانوي):</strong> {questionBank.filter(q=>q.testType==='قدرات').length} سؤالاً</li>
                    <li><strong>اختبارات التحصيلي (ثالث ثانوي):</strong> {questionBank.filter(q=>q.testType==='تحصيلي').length} سؤالاً</li>
                  </ul>
                </div>
              </div>
            )}
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

// 4. الربط التلقائي بـ Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));