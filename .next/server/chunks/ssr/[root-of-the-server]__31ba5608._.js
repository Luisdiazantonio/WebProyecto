module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/paginas/examen/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ExamenPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ExamenPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const subjects = [
        {
            displayName: 'Base de Datos',
            dbName: 'bd'
        },
        {
            displayName: 'Programación Web',
            dbName: 'web'
        },
        {
            displayName: 'Sistemas Operativos',
            dbName: 'so'
        }
    ];
    const [questionsBySubject, setQuestionsBySubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingSubject, setLoadingSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userAnswers, setUserAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [examResults, setExamResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({}); // Para almacenar y mostrar la calificación
    // Asumiendo un ID de alumno (esto debería venir de tu autenticación/sesión)
    const alumnoId = 123; // ¡Cambia esto por el ID real del alumno logueado!
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const storedUsername = localStorage.getItem('username');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Se ejecuta solo en el cliente
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            // Si no hay datos, redirige al login
            router.push('/login');
        }
    }, [
        router
    ]);
    const generarExamenPorMateria = async (subject)=>{
        setLoadingSubject(subject.displayName);
        try {
            const res = await fetch(`/apilocal/cuestionarios?materia=${encodeURIComponent(subject.dbName)}`);
            if (!res.ok) {
                const errorData = await res.json().catch(()=>({
                        message: 'Error desconocido'
                    }));
                throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
            }
            const data = await res.json();
            setQuestionsBySubject((prev)=>({
                    ...prev,
                    [subject.displayName]: data
                }));
            // Limpiar respuestas anteriores y resultados para esta materia si se regenera
            setUserAnswers((prev)=>{
                const newAnswers = {
                    ...prev
                };
                data.forEach((q)=>delete newAnswers[q.id]);
                return newAnswers;
            });
            setExamResults((prev)=>({
                    ...prev,
                    [subject.displayName]: null
                })); // Limpiar resultado anterior
        } catch (error) {
            console.error('Error al generar examen:', error);
            alert(`Error al generar examen de ${subject.displayName}: ${error.message}`);
        } finally{
            setLoadingSubject(null);
        }
    };
    const handleAnswerChange = (questionId, tipo, value)=>{
        setUserAnswers((prev)=>{
            if (tipo === 'opcion' || tipo === 'abierta') {
                return {
                    ...prev,
                    [questionId]: value
                };
            }
            return prev;
        });
    };
    const enviarExamen = async (subjectDisplayName, subjectDbName)=>{
        const questions = questionsBySubject[subjectDisplayName];
        if (!questions || questions.length === 0) {
            alert('No hay preguntas para enviar en este examen.');
            return;
        }
        const examData = {
            id_alumno: alumnoId,
            materia: subjectDbName,
            // --- CAMBIO CLAVE AQUÍ: ENVIAR LA PREGUNTA ORIGINAL COMPLETA ---
            respuestas_enviadas: questions.map((q)=>({
                    id_pregunta: q.id,
                    tipo: q.tipo,
                    pregunta_original: q,
                    respuesta_usuario: userAnswers[q.id] || null
                }))
        };
        console.log('Datos a enviar para calificación:', examData);
        try {
            const res = await fetch('/apilocal/resultados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(examData)
            });
            if (!res.ok) {
                const errorData = await res.json().catch(()=>({
                        message: 'Error desconocido'
                    }));
                throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
            }
            const result = await res.json();
            const finalScore = result.calificacionFinal; // Obtenemos la calificación sobre 10 del backend
            alert(`Examen de ${subjectDisplayName} enviado con éxito. Calificación: ${finalScore}/10`);
            console.log('Resultado del envío:', result);
            setExamResults((prev)=>({
                    ...prev,
                    [subjectDisplayName]: finalScore
                })); // Guarda la calificación para mostrarla
            // Opcional: limpiar las preguntas y respuestas después del envío si no quieres que se puedan revisar
            setQuestionsBySubject((prev)=>{
                const newState = {
                    ...prev
                };
                delete newState[subjectDisplayName];
                return newState;
            });
            setUserAnswers((prev)=>{
                const newState = {
                    ...prev
                };
                questions.forEach((q)=>delete newState[q.id]);
                return newState;
            });
        } catch (error) {
            console.error('Error al enviar examen:', error);
            alert(`Error al enviar examen de ${subjectDisplayName}: ${error.message}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col bg-black text-teal-300 font-mono px-6 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "Examen"
                    }, void 0, false, {
                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/paginas/alumno",
                        className: "flex items-center gap-2 text-teal-300 hover:text-teal-100 transition hover:underline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                className: "text-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/paginas/examen/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            " Regresar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/paginas/examen/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6 max-w-3xl mx-auto w-full",
                children: subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-neutral-900 p-4 rounded-xl border border-teal-500/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold",
                                        children: subject.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    !questionsBySubject[subject.displayName] && !examResults[subject.displayName] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>generarExamenPorMateria(subject),
                                        disabled: loadingSubject === subject.displayName,
                                        className: "bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded transition ml-6",
                                        children: loadingSubject === subject.displayName ? 'Generando...' : 'Generar examen'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    examResults[subject.displayName] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-bold text-teal-400",
                                        children: [
                                            "Calificación: ",
                                            examResults[subject.displayName],
                                            "/10"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/paginas/examen/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            questionsBySubject[subject.displayName] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "space-y-4",
                                children: [
                                    questionsBySubject[subject.displayName].map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-teal-500/10 pt-4 mt-4 first:mt-0 first:pt-0 first:border-t-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-lg mb-2",
                                                    children: q.pregunta
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/paginas/examen/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this),
                                                q.tipo === 'opcion' && q.opciones && q.opciones.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: q.opciones.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-base",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: `q-${q.id}`,
                                                                    value: opt.texto,
                                                                    onChange: (e)=>handleAnswerChange(q.id, q.tipo, e.target.value),
                                                                    checked: userAnswers[q.id] === opt.texto,
                                                                    className: "accent-teal-400 w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/paginas/examen/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: opt.texto
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/paginas/examen/page.tsx",
                                                                    lineNumber: 196,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, opt.id, true, {
                                                            fileName: "[project]/src/app/paginas/examen/page.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/paginas/examen/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this),
                                                q.tipo === 'abierta' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    name: `q-${q.id}`,
                                                    rows: 3,
                                                    placeholder: "Escribe tu respuesta aquí...",
                                                    value: userAnswers[q.id] || '',
                                                    onChange: (e)=>handleAnswerChange(q.id, q.tipo, e.target.value),
                                                    className: "w-full p-2 bg-black border border-teal-500/30 rounded mt-2 text-teal-100 placeholder-teal-600 focus:ring focus:ring-teal-400 focus:border-teal-400 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/paginas/examen/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, q.id, true, {
                                            fileName: "[project]/src/app/paginas/examen/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>enviarExamen(subject.displayName, subject.dbName),
                                        className: "w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition mt-6",
                                        children: "Enviar Examen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/paginas/examen/page.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        ]
                    }, subject.displayName, true, {
                        fileName: "[project]/src/app/paginas/examen/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/paginas/examen/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/paginas/examen/page.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__31ba5608._.js.map