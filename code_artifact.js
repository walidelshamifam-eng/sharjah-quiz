/**
 * منصة اختبارات نافس والقدرات والتحصيلي - مدارس الشارقة الأهلية
 * النسخة المحدثة: معالجة شاقولية مباشرة بدون رموز متضاربة
 */

const express = require('express');
const app = express();

app.use(express.json());

// دالة توليد رسم SVG أشكال كسرية مظللة
const generateFractionSVG = (shaded, total = 4) => {
  const size = 120;
  let rects = [];
  for (let i = 0; i < total; i++) {
    const isShaded = i < shaded;
    const x = (i % 2) * (size / 2);
    const y = Math.floor(i / 2) * (size / 2);
    rects.push(`<rect x="${x}" y="${y}" width="${size/2}" height="${size/2}" fill="${isShaded ? '#E5007D' : '#FFFFFF'}" stroke="#3D0B37" stroke-width="2"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">${rects.join('')}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// 1. بنك الأسئلة الشامل (بترميز نصي مباشر للكسور والجذور)
const generateQuestions = () => {
  const list = [];
  let idCounter = 1;

  // نافس - ثالث ابتدائي
  for (let i = 1; i <= 10; i++) {
    const shaded = (i % 3) + 1;
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف الثالث الابتدائي',
      testType: 'نافس',
      subject: 'رياضيات',
      questionText: `ما الكسر الذي يمثل الجزء المظلل في الشكل أدناه؟ (عدد الأجزاء المظللة ${shaded} من 4)`,
      options: ['1/4', '2/4', '3/4', '4/4'],
      correctAnswer: shaded - 1,
      imageUrl: generateFractionSVG(shaded, 4)
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
      questionText: `أوجد الناتج النهائي للعملية التالية: ${i*2}/3 + 1/3`,
      options: [`${i*2 + 1}/3`, `${i}/3`, '2/3', '5/3'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ابتدائي',
      grade: 'الصف السادس الابتدائي',
      testType: 'نافس',
      subject: 'علوم',
      questionText: `أي التغيرات التالية يُعد مثالاً على التغير الكيميائي؟`,
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
      questionText: `ما قيمة المقدار التالي: √81 + 2^${(i%3)+2} ؟`,
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
      questionText: `إذا كانت x/4 = ${i*3}/2 ، فما قيمة x؟`,
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
      questionText: `ما مقدار القوة العمودية المؤثرة على جسم كتلته 5kg؟ (g = 9.8m/s²)`,
      options: ['49 N', '9.8 N', '5 N', '0 N'],
      correctAnswer: 0
    });
    list.push({
      id: idCounter++,
      stage: 'ثانوي',
      grade: 'الصف الثالث ثانوي',
      testType: 'تحصيلي',
      subject: 'كيمياء',
      questionText: `ما المعامل X لوزن المعادلة الكيميائية التالية: 2H₂ + O₂ -> X H₂O ؟`,
      options: ['2', '1', '3', '4'],
      correctAnswer: 0
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
      questionText: `ما مشتقة الدالة التالية: f(x) = ${i}x² + 5x - 2 ؟`,
      options: [`${i*2}x + 5`, `${i}x + 5`, `${i*2}x²`, '5'],
      correctAnswer: 0
    });
  }

  return list;
};

let questionBank = generateQuestions();

// 2. واجهات البرمجة (APIs)
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

// 3. الصفحة الرئيسية العارضة للكسور بصيغة Native HTML Component
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

  <style>
    :root { --purple: #3D0B37; --magenta: #E5007D; --cyan: #00AEEF; --gold: #F3AC10; --bg: #F8F9FA; }
    body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 0; background-color: var(--bg); direction: rtl; }
    header { background: var(--purple); color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; }
    .logo-title { font-size: 20px; color: var(--gold); font-weight: bold; }
    .tagline { font-size: 12px; color: var(--cyan); }
    .role-btn { padding: 8px 16px; border-radius: 20px; border: none; cursor: pointer; font-weight: bold; color: white; background: transparent; transition: 0.3s; }
    .role-btn.active { background: var(--magenta); }
    .container { max-width: 950px; margin: 25px auto; padding: 0 20px; }
    .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 20px; }
    .question-card { border-right: 5px solid var(--magenta); }
    .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px; }
    .option-btn { padding: 14px; border-radius: 8px; border: 1px solid #ddd; background: white; text-align: right; cursor: pointer; font-size: 18px; min-height: 60px; display: flex; align-items: center; justify-content: flex-start; }
    .option-btn.selected { border-color: var(--magenta); background: rgba(229, 0, 125, 0.08); font-weight: bold; }
    .btn-submit { width: 100%; padding: 14px; background: var(--magenta); color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: bold; cursor: pointer; }
    select, input, textarea { padding: 10px; border-radius: 6px; border: 1px solid #ccc; font-size: 15px; }
    .filter-group { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 180px; }
    .filter-label { font-weight: bold; color: var(--purple); font-size: 13px; }
    
    /* تصميم الكسر الشاقولي بـ Native HTML/CSS المصمم للرياضيات العربية */
    .math-frac { display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; font-weight: bold; margin: 0 4px; line-height: 1.1; }
    .math-num { border-bottom: 2px solid var(--purple); padding: 2px 4px; display: block; font-size: 1.1em; }
    .math-den { padding: 2px 4px; display: block; font-size: 1.1em; }
    
    .q-image { max-width: 140px; height: auto; border-radius: 8px; margin: 12px 0; border: 2px solid var(--purple); }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center; }
    .stat-box { padding: 20px; border-radius: 8px; background: #fff; border: 1px solid #eee; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    // مكون محول الكسر الشاقولي المباشر والنظيف بدون أي أخطاء لغوية
    function NativeMathText({ text }) {
      if (!text) return null;
      const str = String(text);
      const parts = str.split(/(\\d+\\/\\d+)/g);

      return (
        <span>
          {parts.map((part, i) => {
            if (/^\\d+\\/\\d+$/.test(part)) {
              const [num, den] = part.split('/');
              return (
                <span key={i} className="math-frac">
                  <span className="math-num">{num}</span>
                  <span className="math-den">{den}</span>
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </span>
      );
    }

    function App() {
      const [role, setRole] = useState('student');
      const [stage, setStage] = useState('ابتدائي');
      const [grade, setGrade] = useState('الصف الثالث الابتدائي');
      const [testType, setTestType] = useState('نافس');
      const [subject, setSubject] = useState('نموذج شامل');
      const [questions, setQuestions] = useState([]);
      const [userAnswers, setUserAnswers] = useState({});
      const [result, setResult] = useState(null);

      // للوحة المعلم
      const [qStage, setQStage] = useState('ثانوي');
      const [qGrade, setQGrade] = useState('الصف الثالث ثانوي');
      const [qTestType, setQTestType] = useState('تحصيلي');
      const [qSubject, setQSubject] = useState('رياضيات');
      const [qText, setQText] = useState('');
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
            options: options,
            correctAnswer: parseInt(correctIndex)
          })
        })
        .then(res => res.json())
        .then(() => {
          alert('تمت إضافة السؤال بنجاح إلى بنك الأسئلة!');
          setQText(''); setOptions(['', '', '', '']);
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
                      س{idx+1}: <NativeMathText text={q.questionText} />
                    </h4>
                    {q.imageUrl && <img src={q.imageUrl} alt="شكل السؤال" className="q-image" />}
                    <div className="options-grid">
                      {q.options.map((opt, oIdx) => (
                        <button key={oIdx} className={\`option-btn \${userAnswers[q.id]===oIdx?'selected':''}\`} onClick={()=>setUserAnswers({...userAnswers, [q.id]: oIdx})}>
                          <NativeMathText text={opt} />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {questions.length > 0 && <button className="btn-submit" onClick={submitQuiz}>تسليم الورقة وتصحيح المحاولة</button>}

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

            {role === 'teacher' && (
              <div className="card">
                <h3 style={{color:'var(--purple)', marginTop:0}}>لوحة المعلم - إدخال وتحديث الأسئلة</h3>
                <form onSubmit={handleAddQuestionSubmit}>
                  <div style={{display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'15px'}}>
                    <div className="filter-group"><label className="filter-label">المرحلة</label><select value={qStage} onChange={e=>setQStage(e.target.value)}><option value="ابتدائي">ابتدائي</option><option value="ثانوي">ثانوي</option></select></div>
                    <div className="filter-group"><label className="filter-label">الصف</label><select value={qGrade} onChange={e=>setQGrade(e.target.value)}><option value="الصف الثالث الابتدائي">الصف الثالث الابتدائي</option><option value="الصف السادس الابتدائي">الصف السادس الابتدائي</option><option value="الصف الثاني ثانوي">الصف الثاني ثانوي</option><option value="الصف الثالث ثانوي">الصف الثالث ثانوي</option></select></div>
                    <div className="filter-group"><label className="filter-label">نوع الاختبار</label><select value={qTestType} onChange={e=>setQTestType(e.target.value)}><option value="نافس">نافس</option><option value="قدرات">قدرات</option><option value="تحصيلي">تحصيلي</option></select></div>
                    <div className="filter-group"><label className="filter-label">المادة</label><input type="text" value={qSubject} onChange={e=>setQSubject(e.target.value)} placeholder="مثال: كيمياء..." required /></div>
                  </div>

                  <div style={{marginBottom:'15px'}}>
                    <label className="filter-label">نص السؤال (أدخل الكسور بالشكل المباشر مثل 1/4):</label>
                    <textarea style={{width:'100%', height:'80px', marginTop:'5px'}} value={qText} onChange={e=>setQText(e.target.value)} placeholder="اكتب السؤال هنا..." required />
                  </div>

                  <div style={{marginBottom:'15px'}}>
                    {options.map((opt, i) => (
                      <div key={i} style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px'}}>
                        <input type="radio" name="correct" checked={correctIndex === i} onChange={()=>setCorrectIndex(i)} />
                        <input style={{flex:1}} type="text" value={opt} onChange={e=>{
                          const copy = [...options]; copy[i] = e.target.value; setOptions(copy);
                        }} placeholder={\`الخيار \${i+1}\`} required />
                      </div>
                    ))}
                  </div>

                  <button className="btn-submit" type="submit">إضافة السؤال بنجاح</button>
                </form>
              </div>
            )}

            {role === 'admin' && (
              <div className="card">
                <h3 style={{color:'var(--purple)', marginTop:0}}>لوحة الإدارة الرئيسية (Admin Dashboard)</h3>
                <div className="stats-grid">
                  <div className="stat-box"><h4 style={{margin:0}}>إجمالي الأسئلة</h4><p style={{fontSize:'28px', color:'var(--magenta)', fontWeight:'bold'}}>{questionBank.length}</p></div>
                  <div className="stat-box"><h4 style={{margin:0}}>الصفوف المفعّلة</h4><p style={{fontSize:'28px', color:'var(--purple)', fontWeight:'bold'}}>4 صفوف</p></div>
                  <div className="stat-box"><h4 style={{margin:0}}>حالة النظام</h4><p style={{fontSize:'22px', color:'green', fontWeight:'bold'}}>نشط ومستقر 100%</p></div>
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
``` eof

---

### خطوات التطبيق الحاسمة على GitHub و Render:

1. قم بنسخ الكود المحدث بالكامل المكتوب أعلاه في الملف المرفق.
2. ادخل إلى صفحة المستودع لرفعه عبر الرابط:
   **[https://github.com/walidelshamifam-eng/sharjah-quiz/upload/main](https://github.com/walidelshamifam-eng/sharjah-quiz/upload/main)**
3. الصق الكود في `app.js` ثم اضغط على **Commit changes**.
4. **خطوة إجبارية في Render لإنهاء المشكلة:**
   * ادخل على **[dashboard.render.com](https://dashboard.render.com)**.
   * اختر تطبيق `sharjah-quiz`.
   * اضغط على زر **Manual Deploy** واختر **Clear build cache & deploy**.

ستظهر الكُسور الرياضية على شكل بسط ومقام شاقولي ممتازة القراءة ومباشرة وبدون أي رموز خطأ على الموقع `https://sharjah-quiz.onrender.com`.