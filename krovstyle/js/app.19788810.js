(function (t) {
    function e(e) {
        for (var s, r, c = e[0], o = e[1], l = e[2], A = 0, p = []; A < c.length; A++) r = c[A], Object.prototype.hasOwnProperty.call(a, r) && a[r] && p.push(a[r][0]), a[r] = 0;
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
        u && u(e);
        while (p.length) p.shift()();
        return n.push.apply(n, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < n.length; e++) {
            for (var i = n[e], s = !0, c = 1; c < i.length; c++) {
                var o = i[c];
                0 !== a[o] && (s = !1)
            }
            s && (n.splice(e--, 1), t = r(r.s = i[0]))
        }
        return t
    }

    var s = {}, a = {app: 0}, n = [];

    function r(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {i: e, l: !1, exports: {}};
        return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }

    r.m = t, r.c = s, r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, r.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) r.d(i, s, function (e) {
            return t[e]
        }.bind(null, s));
        return i
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], o = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var l = 0; l < c.length; l++) e(c[l]);
    var u = o;
    n.push([0, "chunk-vendors"]), i()
})({
    0: function (t, e, i) {
        t.exports = i("56d7")
    }, "034f": function (t, e, i) {
        "use strict";
        i("85ec")
    }, "04b3": function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAAB3RSTlMA72Aw33BQGe6W7AAAAIlJREFUGNNFzzEKwlAURNFBV6BBfqs2toquQIvU7iEbSAh52w/khpnffc6Fx+j2U97nq358+ntso1p1/r9q1qO2AK5Fh6rOXFcR7DxJBGGCMIHZAZwAdvCGHZxgBwUnCHM7M7ntFXARmO8EGcaKDGOFmRVhEYQJzA7gBHCCfmMHavAezPqflTdcVrBuO/jmUufBAAAAAElFTkSuQmCC"
    }, "06b3": function (t, e, i) {
        t.exports = i.p + "img/q2-6.ac838261.png"
    }, "0d6a": function (t, e, i) {
        t.exports = i.p + "img/q6-1.376e7d63.png"
    }, "0e89": function (t, e, i) {
        t.exports = i.p + "img/q3-5.d9280af3.png"
    }, "1c67": function (t, e, i) {
        t.exports = i.p + "img/q3-1.6fcee329.png"
    }, "213f": function (t, e, i) {
        t.exports = i.p + "img/q1-2.33f608fe.png"
    }, "2d26": function (t, e, i) {
        t.exports = i.p + "img/q1-5.7e4f4d2e.png"
    }, "2dab": function (t, e, i) {
        "use strict";
        i("c738")
    }, 3253: function (t, e, i) {
        t.exports = i.p + "img/q6-2.0b601b0d.png"
    }, "33ab": function (t, e, i) {
        t.exports = i.p + "img/q1-6.da15ba63.png"
    }, "38a7": function (t, e, i) {
        t.exports = i.p + "img/q2-5.19a4337b.png"
    }, "3da9": function (t, e, i) {
        t.exports = i.p + "img/q7-1.615fadd2.png"
    }, 4197: function (t, e, i) {
        t.exports = i.p + "img/q2-1.6682b7ba.png"
    }, 4609: function (t, e, i) {
        t.exports = i.p + "img/q8-1.5964b43d.png"
    }, 4994: function (t, e, i) {
        t.exports = i.p + "img/q8-3.5ced345d.png"
    }, "4ffd": function (t, e) {
        t.exports = "data:image/png;base64,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"
    }, 5259: function (t, e, i) {
    }, "550d": function (t, e, i) {
        t.exports = i.p + "img/denis.509ddfa2.png"
    }, "56d7": function (t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var s = i("2b0e"), a = function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    class: t.isQuiz ? t.isMobile ? "app-quiz-mobile-bg" : "app-quiz-bg" : t.isMobile ? "app-mobile-bg" : "app-bg",
                    attrs: {id: "app"}
                }, [i("div", {staticClass: "container"}, [i("Header", {
                    attrs: {
                        "is-quiz": t.isQuiz,
                        "is-thanks": t.thanksPage
                    }, on: {thanks: t.goThanks, closeQuiz: t.stopQuiz}
                }), i("div", {
                    staticClass: "main",
                    class: t.isQuiz ? "main-16" : "main-30"
                }, [t.isQuiz ? t._e() : i("div", {staticClass: "main__pre-text"}, [t._v("За 1 минуту")]), t.isQuiz ? t._e() : i("div", {staticClass: "main__text"}, [t._v("Пройдите тест и "), t._m(0), i("br"), t._v(" на ваш объект с точностью 97% ")]), t.isQuiz ? t._e() : i("div", {staticClass: "main__after-text"}, [t._v(" Ответьте на 8 вопросов и "), i("b", [t._v("получите в конце:")])]), t.isQuiz ? t._e() : i("div", {staticClass: "main__benefits flex-row-lg"}, [t._m(1), t._m(2), t._m(3)]), t.isQuiz ? t._e() : i("button", {
                    staticClass: "button main__button",
                    on: {click: t.startQuiz}
                }, [t._v("Рассчитать стоимость кровли")]), t.isQuiz ? i("Quiz", {
                    attrs: {
                        thanks: t.thanksPage,
                        quiz: t.quiz
                    }, on: {thanks: t.goThanks}
                }) : t._e()], 1), i("div", {staticClass: "copyright accent"}, [t._v("©2021. Domstyle Все права защищены")])], 1)])
            }, n = [function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("span", {staticClass: "accent"}, [t._v("рассчитайте"), i("br"), t._v(" стоимость кровельных материалов")])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "main__benefit-item-wrap"}, [s("div", {staticClass: "main__benefit-item flex-column-lg"}, [s("img", {
                    staticClass: "main__benefit-item-img",
                    attrs: {src: i("d03a"), alt: "img"}
                }), s("div", {staticClass: "main__benefit-item-text"}, [t._v(" Стоимость кровли"), s("br"), t._v(" в 3-х вариантах ")])])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "main__benefit-item-wrap"}, [s("div", {staticClass: "main__benefit-item flex-column-lg"}, [s("img", {
                    staticClass: "main__benefit-item-img ",
                    staticStyle: {width: "140px", height: "140px", "margin-bottom": "-19px"},
                    attrs: {src: i("fe59"), alt: "img"}
                }), s("div", {staticClass: "main__benefit-item-text"}, [t._v(" ТОП 5 ошибок при"), s("br"), t._v(" выборе кровельных"), s("br"), t._v(" материалов ")])])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "main__benefit-item-wrap"}, [s("div", {staticClass: "main__benefit-item flex-column-lg"}, [s("img", {
                    staticClass: "main__benefit-item-img main__benefit-item-img-3",
                    staticStyle: {width: "130px", height: "130px", "margin-bottom": "-10px"},
                    attrs: {src: i("5929"), alt: "img"}
                }), s("div", {staticClass: "main__benefit-item-text"}, [t._v(" 1 из 3 подарков"), s("br"), t._v(" на выбор ")])])])
            }], r = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "header"}, [s("div", {staticClass: "flex-row-lg align-items-start header__wrapper"}, [s("div", {
                    staticClass: "flex-row-lg header__logo header__logo-row margin-right",
                    class: t.logoMargin
                }, [s("img", {
                    staticClass: "header__logo-img",
                    attrs: {src: i("4ffd"), alt: "logo"}
                }), t.isQuiz ? t._e() : s("div", {staticClass: "header__logo-text"}, [t._v("Крупнейший дистрибьютор кровельных материалов в Беларуси ")])]), t.isQuiz ? t._e() : s("div", {staticClass: "header__left-container align-items-start flex-row"}, [t._m(0), t._m(1), s("div", {staticClass: "header__phone header__item flex-row"}, [s("img", {
                    staticClass: "header__phone-icon header__icon",
                    attrs: {src: i("c47f"), alt: "location"}
                }), s("div", {staticClass: "flex-column"}, [s("a", {
                    staticClass: "header__phone-text",
                    attrs: {href: "tel:+375447405995"}
                }, [t._v("+375 (44) 740-59-95")]), s("a", {
                    staticClass: "header__phone-callback-link accent",
                    on: {click: t.show}
                }, [t._v("Заказать обратный звонок")])])])]), t.isQuiz && !t.isThanksPage ? s("div", {staticClass: "header__quiz-text"}, [s("span", {staticClass: "accent"}, [t._v("Калькулятор")]), t._v(" стоимости кровли")]) : t._e(), t.isQuiz ? s("div", {staticClass: "quiz__close-wrap"}, [s("img", {
                    staticClass: "header__quiz-close",
                    attrs: {src: i("04b3"), alt: ""},
                    on: {click: t.closeQuiz}
                })]) : t._e()]), s("modal", {
                    attrs: {
                        adaptive: !0,
                        height: 430,
                        name: "modal"
                    }
                }, [s("div", {staticClass: "modal__content"}, [s("img", {
                    staticClass: "header__quiz-close modal__content-close",
                    attrs: {src: i("04b3"), alt: "x"},
                    on: {click: t.hide}
                }), s("h3", {staticClass: "modal__title"}, [t._v("Заказать обратный звонок")]), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.username,
                        expression: "username"
                    }],
                    staticClass: "modal__name-input",
                    attrs: {placeholder: "Ваше имя", type: "text"},
                    domProps: {value: t.username},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.username = e.target.value)
                        }
                    }
                }), s("input", {
                    directives: [{name: "model", rawName: "v-model", value: t.phone, expression: "phone"}],
                    staticClass: "modal__phone-input",
                    attrs: {type: "text", placeholder: "Ваш телефон"},
                    domProps: {value: t.phone},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.phone = e.target.value)
                        }
                    }
                }), s("button", {
                    staticClass: "button main__button modal__button",
                    attrs: {disabled: t.username.length < 2 || t.phone.length < 5},
                    on: {click: t.sendData}
                }, [t._v("Отправить")])])])], 1)
            }, c = [function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "header__location header__item flex-row",
                    staticStyle: {"margin-right": "32px"}
                }, [s("img", {
                    staticClass: "header__location-icon header__icon",
                    attrs: {src: i("9076"), alt: "location"}
                }), s("div", {staticClass: "header__location-text"}, [t._v("г. Минск, ул. Притыцкого"), s("br"), t._v("62/2 офис 711")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "header__pdf header__item flex-column",
                    staticStyle: {"margin-right": "25px"}
                }, [s("div", {staticClass: "flex-row"}, [s("img", {
                    staticClass: "header__pdf-icon",
                    attrs: {src: i("77ef"), alt: "pdf"}
                }), s("a", {
                    staticClass: "header__pdf--text accent",
                    attrs: {href: "img/pdf.png"}
                }, [t._v("Скачать ТОП 5 ошибок при выборе"), s("br"), t._v(" кровельных материалов ")])]), s("div", {staticClass: "header__pdf-under"}, [t._v("PDF 1,5 Mb")])])
            }], o = i("bc3a").default, l = {
                name: "Header", props: {isQuiz: Boolean, isThanks: Boolean}, data: function () {
                    return {username: "", phone: ""}
                }, methods: {
                    sendData: function () {
                        this.processData(this)
                    }, processData: function (t) {
                        var e = {};
                        e["Имя"] = this.username, e["Телефон"] = this.phone, o.post("mail.php", e).then((function (e) {
                            console.log(e), t.$emit("thanks"), t.isThanksPage = !0
                        })).catch((function (t) {
                            console.log(t)
                        })), t.hide()
                    }, closeQuiz: function () {
                        this.$emit("closeQuiz")
                    }, show: function () {
                        this.$modal.show("modal")
                    }, hide: function () {
                        this.$modal.hide("modal")
                    }
                }, computed: {
                    logoMargin: function () {
                        return {"margin-center": this.isQuiz && window.innerWidth < 840}
                    }, isThanksPage: function () {
                        return this.isThanks
                    }
                }
            }, u = l, A = (i("b626"), i("2877")), p = Object(A["a"])(u, r, c, !1, null, "0016cfac", null), d = p.exports,
            m = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz"}, [s("div", {staticClass: "quiz__container"}, [s("div", {
                    ref: "progress",
                    staticClass: "quiz__step"
                }, [s("div", {
                    staticClass: "quiz__step-progress",
                    style: {width: t.progress + "px"}
                }), t.isFinal ? t._e() : s("div", {staticClass: "quiz__step-text"}, [t._v("Вы отвечаете на " + t._s(t.currentSlide + 1) + " вопрос из " + t._s(t.quiz.length) + " ")])]), t.isThankPage ? t._e() : s("div", {staticClass: "quiz__benefits flex-column"}, [t._m(0), t._m(1), t._m(2), t._m(3)]), t.isThankPage ? t._e() : s("div", {staticClass: "quiz__hints flex-column"}, [t._m(4), s("img", {
                    staticClass: "quiz__hints-face",
                    attrs: {src: i("550d"), alt: "denis"}
                }), s("div", {staticClass: "quiz__hints-heading"}, [t._v("Денис Рудницкий")]), s("div", {staticClass: "quiz__hints-position"}, [t._v("Менеджер по продажам")]), s("div", {staticClass: "quiz__hints-heading"}, [t._v(t._s(t.currentSlide + 1 === t.quiz.length ? "Ваш подарок:" : "Подсказка:"))]), s("div", {staticClass: "quiz__hints-hint"}, [t._v(t._s(t.quiz[t.currentSlide].hint))])]), t.isFinal || t.isThankPage ? t._e() : s("div", {staticClass: "quiz__wrap"}, [t.quiz[t.currentSlide].title ? s("div", {staticClass: "quiz__title"}, [t._v(t._s(t.currentSlide + 1) + ". " + t._s(t.quiz[t.currentSlide].title) + " ")]) : t._e(), t.quiz[t.currentSlide].comment ? s("div", {staticClass: "quiz__comment"}, [t._v(t._s(t.quiz[t.currentSlide].comment))]) : t._e(), s("div", {staticClass: "quiz__questions"}, t._l(t.quiz[t.currentSlide].questions, (function (e, i) {
                    return s("div", {
                        key: i,
                        class: t.quiz[t.currentSlide].fullwidth ? "quiz__questions-item-100" : "quiz__questions-item"
                    }, ["tile" === e.type ? s("div", {staticClass: "quiz__questions-tile"}, [s("div", {staticClass: "quiz__questions-tile-img-wrap"}, [s("img", {
                        staticClass: "quiz__questions-tile-img",
                        class: e.text === t.currentAnswer ? "quiz__questions-tile-checked-shadow" : "",
                        attrs: {src: e.image, alt: e.text}
                    }), s("div", {
                        staticClass: "quiz__questions-tile-check",
                        class: e.text === t.currentAnswer ? "quiz__questions-checked" : ""
                    })]), s("label", {
                        staticClass: "quiz__questions-tile-label",
                        attrs: {for: "tile" + i}
                    }), s("div", {staticClass: "quiz__questions-tile-text"}, [t._v(t._s(e.text))]), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.currentAnswer,
                            expression: "currentAnswer"
                        }],
                        staticClass: "hidden",
                        attrs: {id: "tile" + i, name: "quiz[currentSlide].title", type: "radio"},
                        domProps: {value: e.text, checked: t._q(t.currentAnswer, e.text)},
                        on: {
                            change: function (i) {
                                t.currentAnswer = e.text
                            }
                        }
                    })]) : t._e(), "radio" === e.type ? s("div", {staticClass: "quiz__questions-radio-btn"}, [s("div", {
                        staticClass: "quiz__questions-check",
                        class: e.value === t.currentAnswer ? "quiz__questions-checked" : ""
                    }), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.currentAnswer,
                            expression: "currentAnswer"
                        }],
                        staticClass: "hidden",
                        attrs: {id: "radio" + i, type: "radio"},
                        domProps: {value: e.value, checked: t._q(t.currentAnswer, e.value)},
                        on: {
                            change: function (i) {
                                t.currentAnswer = e.value
                            }
                        }
                    }), s("label", {
                        staticClass: "quiz__questions-radio-label",
                        attrs: {for: "radio" + i},
                        domProps: {innerHTML: t._s(e.text)}
                    })]) : t._e(), "slider" === e.type ? s("div", {staticClass: "quiz__questions-slider"}, [s("div", {staticClass: "quiz__questions-slider-value-wrap"}, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.sliderValue,
                            expression: "sliderValue"
                        }],
                        ref: "slider",
                        refInFor: !0,
                        staticClass: "quiz__questions-input",
                        attrs: {name: e.name, type: "number", id: "slider_" + i},
                        domProps: {value: t.sliderValue},
                        on: {
                            input: function (e) {
                                e.target.composing || (t.sliderValue = e.target.value)
                            }
                        }
                    }), s("div", {staticClass: "quiz__questions-slider-value-unit"}, [t._v(t._s(e.unit))])]), s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.sliderValue,
                            expression: "sliderValue"
                        }],
                        staticClass: "quiz__questions-slider-input",
                        attrs: {type: "range", min: e.min, max: e.max},
                        domProps: {value: t.sliderValue},
                        on: {
                            __r: function (e) {
                                t.sliderValue = e.target.value
                            }
                        }
                    }), s("div", {staticClass: "quiz__questions-slider-input-minmax"}, [s("div", {staticClass: "quiz__questions-slider-min"}, [t._v(t._s(e.min) + " " + t._s(e.unit))]), s("div", {staticClass: "quiz__questions-slider-max"}, [t._v(t._s(e.max) + " " + t._s(e.unit))])])]) : t._e()])
                })), 0)]), t.isFinal && !t.isThankPage ? s("div", {staticClass: "quiz__contacts"}, [s("div", {staticClass: "quiz__title"}, [t._v("Менеджер уже приступил к расчёту кровли")]), s("div", {staticClass: "quiz__comment"}, [t._v("Введите Ваш телефон и получите стоимость в течение 30 минут на:")]), s("div", {staticClass: "quiz__questions-radio-btn quiz__questions-radio-btn-contacts"}, [s("img", {
                    staticClass: "quiz__questions-radio-btn-img",
                    attrs: {src: i("c192"), alt: ""}
                }), s("div", {
                    staticClass: "quiz__questions-check quiz__questions-check-contacts",
                    class: "viber" === t.currentAnswer ? "quiz__questions-checked" : ""
                }), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentAnswer,
                        expression: "currentAnswer"
                    }],
                    staticClass: "hidden",
                    attrs: {id: "viber", type: "radio", value: "viber"},
                    domProps: {checked: t._q(t.currentAnswer, "viber")},
                    on: {
                        change: function (e) {
                            t.currentAnswer = "viber"
                        }
                    }
                }), t._m(5)]), s("div", {staticClass: "quiz__questions-radio-btn quiz__questions-radio-btn-contacts"}, [s("img", {
                    staticClass: "quiz__questions-radio-btn-img",
                    attrs: {src: i("a2f9"), alt: ""}
                }), s("div", {
                    staticClass: "quiz__questions-check quiz__questions-check-contacts",
                    class: "telegram" === t.currentAnswer ? "quiz__questions-checked" : ""
                }), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentAnswer,
                        expression: "currentAnswer"
                    }],
                    staticClass: "hidden",
                    attrs: {id: "telegram", type: "radio", value: "telegram"},
                    domProps: {checked: t._q(t.currentAnswer, "telegram")},
                    on: {
                        change: function (e) {
                            t.currentAnswer = "telegram"
                        }
                    }
                }), t._m(6)]), s("div", {staticClass: "quiz__questions-radio-btn quiz__questions-radio-btn-contacts"}, [s("img", {
                    staticClass: "quiz__questions-radio-btn-img",
                    attrs: {src: i("9347"), alt: ""}
                }), s("div", {
                    staticClass: "quiz__questions-check quiz__questions-check-contacts",
                    class: "phone" === t.currentAnswer ? "quiz__questions-checked" : ""
                }), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentAnswer,
                        expression: "currentAnswer"
                    }],
                    staticClass: "hidden",
                    attrs: {id: "phone", type: "radio", value: "phone"},
                    domProps: {checked: t._q(t.currentAnswer, "phone")},
                    on: {
                        change: function (e) {
                            t.currentAnswer = "phone"
                        }
                    }
                }), s("label", {
                    staticClass: "quiz__questions-radio-label quiz__questions-contacts",
                    attrs: {for: "phone"}
                }, [t._v(" перезвоните мне, у меня остались вопросы ")])]), s("div", {staticClass: "quiz__contacts-phone"}, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.phone,
                        expression: "phone"
                    }],
                    staticClass: "quiz__questions-input quiz__contacts-phone-input",
                    attrs: {placeholder: "Введите ваш телефон", type: "text"},
                    domProps: {value: t.phone},
                    on: {
                        input: function (e) {
                            e.target.composing || (t.phone = e.target.value)
                        }
                    }
                }), s("img", {
                    staticClass: "quiz__contacts-phone-img",
                    attrs: {src: i("5869"), alt: "p"}
                })])]) : t._e(), t.isThankPage ? s("div", {staticClass: "quiz__thankpage"}, [t._m(7), t._m(8), t._m(9), t._m(10), t._m(11), t._m(12), t._m(13), t._m(14), t._m(15)]) : t._e(), t.isFinal || t.isThankPage ? t._e() : s("button", {
                    staticClass: "button quiz__button",
                    attrs: {disabled: t.currentAnswer.length < 1},
                    on: {click: t.nextStep}
                }, [t._v("Далее ")]), t.isFinal && !t.isThankPage ? s("button", {
                    staticClass: "button quiz__button",
                    attrs: {disabled: t.currentAnswer.length < 1 || t.phone.length < 2},
                    on: {click: t.nextStep}
                }, [t._v("Получить расчёт + подарок ")]) : t._e()]), t.showOverlay ? s("div", {staticClass: "quiz__overlay"}) : t._e()])
            }, g = [function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__benefits-title"}, [t._v(" Вы получите"), i("br"), t._v(" в конце теста ")])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__benefit-item flex-column-lg"}, [s("img", {
                    staticClass: "quiz__benefit-item-img",
                    attrs: {src: i("d03a"), alt: "img"}
                }), s("div", {staticClass: "quiz__benefit-item-text"}, [t._v(" Стоимость кровли"), s("br"), t._v(" в 3-х вариантах ")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__benefit-item flex-column-lg"}, [s("img", {
                    staticClass: "quiz__benefit-item-img quiz__benefit-item-img-2",
                    attrs: {src: i("fe59"), alt: "img"}
                }), s("div", {staticClass: "quiz__benefit-item-text"}, [t._v(" ТОП 5 ошибок при выборе"), s("br"), t._v(" кровельных материалов ")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__benefit-item flex-column-lg"}, [s("img", {
                    staticClass: "quiz__benefit-item-img",
                    attrs: {src: i("5929"), alt: "img"}
                }), s("div", {staticClass: "quiz__benefit-item-text"}, [t._v(" 1 из 3 подарков"), s("br"), t._v(" на выбор ")])])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__hints-title"}, [t._v("Буду вам"), i("br"), t._v(" помогать ")])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("label", {
                    staticClass: "quiz__questions-radio-label quiz__questions-contacts",
                    attrs: {for: "viber"}
                }, [t._v(" в "), i("b", [t._v("Viber")])])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("label", {
                    staticClass: "quiz__questions-radio-label quiz__questions-contacts",
                    attrs: {for: "telegram"}
                }, [t._v(" в "), i("b", [t._v("Telegram")])])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__thankpage-time"}, [t._v(" Предложение отправим в ближайшее время!"), i("br"), t._v(" Время обработки заявок: пн-пт 10:00 – 18:00 ")])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__thankpage-main-text"}, [t._v(" А пока мы формируем коммерческое предложение, "), i("b", [t._v("скачать ТОП 5 ошибок при выборе кровельных материалов")])])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__thankpage-buttons"}, [i("a", {attrs: {href: "#"}}, [i("button", {staticClass: "button quiz__button quiz__button-thanks"}, [t._v("Скачать ТОП 5 ошибок при выборе кровельных материалов")])]), i("a", {attrs: {href: "https://domstyle.by/"}}, [i("button", {staticClass: "button quiz__button quiz__button-thanks"}, [t._v("Перейти на наш сайт")])])])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__thankpage-main-text"}, [i("b", [t._v("Приезжайте к нам в ОФИС по адресу:")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__thankpage-map"}, [s("img", {
                    staticClass: "quiz__thankpage-map-img",
                    attrs: {src: i("e131"), alt: ""}
                }), s("div", {staticClass: "quiz__thankpage-map-text"}, [t._v("г. Минск, Притыцкого 62/2")])])
            }, function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "quiz__thankpage-free"}, [t._v("Где наш опытный проектировщик абсолютно "), i("b", [t._v("бесплатно:")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__thankpage-free-item"}, [s("img", {
                    staticClass: "quiz__thankpage-free-item-img",
                    attrs: {src: i("b602"), alt: "p"}
                }), s("div", {staticClass: "quiz__thankpage-free-item-text"}, [s("b", [t._v("Поможет")]), t._v(" с проектом кровли")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__thankpage-free-item"}, [s("img", {
                    staticClass: "quiz__thankpage-free-item-img",
                    attrs: {src: i("b602"), alt: "p"}
                }), s("div", {staticClass: "quiz__thankpage-free-item-text"}, [s("b", [t._v("Нарисует")]), t._v(" техническое решение")])])
            }, function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "quiz__thankpage-free-item"}, [s("img", {
                    staticClass: "quiz__thankpage-free-item-img",
                    attrs: {src: i("b602"), alt: "p"}
                }), s("div", {staticClass: "quiz__thankpage-free-item-text"}, [s("b", [t._v("Проконсультирует")]), t._v(" по всем оставшимся вопросам")])])
            }], h = i("7707"), f = i.n(h);
        f.a.polyfill();
        var v = i("bc3a").default, _ = {
                name: "Quiz", props: {quiz: Array, thanks: Boolean}, computed: {
                    progress: function () {
                        return this ? this.isFinal ? this.progressWidth : this.progressWidth / this.quiz.length * (this.currentSlide + 1) : 0
                    }
                }, mounted: function () {
                    this.progressWidth = this.$refs.progress.clientWidth
                }, data: function () {
                    return {
                        isThankPage: this.thanks,
                        isFinal: this.thanks,
                        currentSlide: 0,
                        progressWidth: 0,
                        currentAnswer: "",
                        sliderValue: 10,
                        formData: {},
                        phone: "",
                        showOverlay: !1
                    }
                }, methods: {
                    collectData: function () {
                        var t = this.isFinal ? "Способ связи" : this.quiz[this.currentSlide].title;
                        this.formData[t] = this.currentAnswer, this.sliderValue > 0 && void 0 === this.formData["Площадь"] && (this.formData["Площадь"] = this.sliderValue), this.isFinal && (this.formData["Номер телефона"] = this.phone), this.currentAnswer = ""
                    }, sendData: function (t) {
                        v.post("mail.php", this.formData).then((function (e) {
                            console.log(e), t.isThankPage = !0, t.$emit("thanks")
                        })).catch((function (t) {
                            console.log(t)
                        }))
                    }, nextStep: function () {
                        this.collectData(), this.isFinal ? this.sendData(this) : this.currentSlide + 1 < this.quiz.length ? this.currentSlide += 1 : (this.isFinal = !0, this.quiz[this.currentSlide].hint = this.formData["Ваш подарок:"]), this.showStepOverlay()
                    }, showStepOverlay: function () {
                        var t = this;
                        window.innerWidth < 840 && document.getElementById("quiz").scrollIntoView({behavior: "smooth"}), this.showOverlay = !0, setTimeout((function () {
                            t.showOverlay = !1
                        }), 550)
                    }
                }
            }, q = _, b = (i("2dab"), Object(A["a"])(q, m, g, !1, null, "7a84a1c3", null)), x = b.exports, z = {
                name: "App",
                metaInfo: {title: "Krovstyle.by"},
                components: {Quiz: x, Header: d},
                computed: {
                    isMobile: function () {
                        return window.innerWidth < 840
                    }
                },
                methods: {
                    startQuiz: function () {
                        this.isQuiz = !0
                    }, stopQuiz: function () {
                        this.isQuiz = !1, this.thanksPage = !1
                    }, goThanks: function () {
                        this.isQuiz = !0, this.thanksPage = !0
                    }
                },
                data: function () {
                    return {
                        thanksPage: !1,
                        isQuiz: !1,
                        quiz: [{
                            title: "Выберите тип Вашей крыши",
                            questions: [{type: "tile", image: i("ddf4"), text: "Односкатная"}, {
                                type: "tile",
                                image: i("213f"),
                                text: "Двускатная"
                            }, {type: "tile", image: i("c642"), text: "Четырехскатная вальмовая"}, {
                                type: "tile",
                                image: i("d055"),
                                text: "Четырехскатная шатровая"
                            }, {type: "tile", image: i("2d26"), text: "Мансардная ломаная"}, {
                                type: "tile",
                                image: i("33ab"),
                                text: "Другая"
                            }],
                            hint: "Форма кровли определяет необходимые доборные элементы, вид\nкомплектующих, количество материалов на подрезку",
                            required: !0
                        }, {
                            title: "Выберите Ваш объект",
                            questions: [{type: "tile", image: i("4197"), text: "Частный дом"}, {
                                type: "tile",
                                image: i("5b7d"),
                                text: "Гостевой домик"
                            }, {type: "tile", image: i("5bac"), text: "Дача"}, {
                                type: "tile",
                                image: i("defd"),
                                text: "Баня"
                            }, {type: "tile", image: i("38a7"), text: "Хозблок/сарай"}, {
                                type: "tile",
                                image: i("06b3"),
                                text: "Карпорт/навес"
                            }],
                            hint: "Выбирая объект мы понимаем какие дополнительные материалы для кровли Вам понадобятся.",
                            required: !0
                        }, {
                            title: "Выберите тип покрытия",
                            questions: [{type: "tile", image: i("1c67"), text: "Металлочерепица листовая"}, {
                                type: "tile",
                                image: i("77c2"),
                                text: "Модульная металлочерепица"
                            }, {type: "tile", image: i("f8f1"), text: "Фальцевая кровля"}, {
                                type: "tile",
                                image: i("f745"),
                                text: "Кровельный профнастил"
                            }, {type: "tile", image: i("0e89"), text: "Композитная черепица"}, {
                                type: "tile",
                                image: i("8577"),
                                text: "Битумная черепица"
                            }],
                            hint: "От типа покрытия зависят стоимость кровельного «пирога», вид работ и стоимость монтажа, комплектующие, сроки и скидка",
                            required: !0
                        }, {
                            title: "Укажите ориентировочно площадь Вашей кровли или площадь дома",
                            questions: [{
                                type: "radio",
                                name: "Тип площади",
                                value: "Площадь кровли",
                                text: "Площадь <b>кровли</b>"
                            }, {
                                type: "radio",
                                name: "Тип площади",
                                value: "Площадь дома",
                                text: "Площадь <b>дома</b>"
                            }, {type: "slider", name: "Площадь", min: 10, max: 1e3, unit: "м2"}, {
                                type: "radio",
                                name: "Тип площади",
                                value: "Не помню",
                                text: "Не помню"
                            }],
                            hint: "От площади кровли зависит объём работ и общая стоимость кровельного покрытия",
                            required: !1,
                            fullwidth: !0
                        }, {
                            title: "Включаем в расчет доборные элементы кровли?",
                            comment: "Такие как: Гидроизоляционные пленки, конек, ветровая планка, карнизная планка, ендова, саморезы, планки примыкания, водосточная система",
                            questions: [{
                                type: "tile",
                                image: i("f30b"),
                                text: "Да, мне важно знать полную стоимость"
                            }, {type: "tile", image: i("8af6"), text: "Посчитайте только стоимость черепицы"}],
                            hint: "Наличие доборных элементов формирует итоговую стоимость Вашей крыши",
                            required: !0
                        }, {
                            title: "У Вас новое строительство или реконструкция?",
                            questions: [{
                                type: "tile",
                                image: i("0d6a"),
                                text: 'Старая крыша (нужно "перекрыть")'
                            }, {type: "tile", image: i("3253"), text: 'Новая крыша (необходимо "накрыть")'}],
                            hint: "Реконструируя кровельный «пирог» важно учитывать все моменты. Доверяйте профессионалам и приглашайте на замер опытных кровельщиков",
                            required: !0
                        }, {
                            title: "Включаем ли мы в стоимость монтаж кровли?",
                            questions: [{type: "tile", image: i("3da9"), text: "Да, нужен монтаж"}, {
                                type: "tile",
                                image: i("8778"),
                                text: "Нет, справлюсь своими силами"
                            }],
                            hint: "Заказывая комплекс в одном месте Вы получаете скидку больше, чем приобретая все по отдельности",
                            required: !0
                        }, {
                            title: "Ваш подарок:",
                            questions: [{
                                type: "tile",
                                image: i("4609"),
                                text: "Снегозадержатель универсальный"
                            }, {type: "tile", image: i("df2d"), text: "Трехслойная мембрана"}, {
                                type: "tile",
                                image: i("4994"),
                                text: "Дополнительная скидка"
                            }],
                            hint: "-Снегозадержатель универсальный -Трехслойная мембрана -Дополнительная скидка",
                            required: !0
                        }]
                    }
                }
            }, C = z, y = (i("034f"), Object(A["a"])(C, a, n, !1, null, null, null)), w = y.exports, B = i("1881"),
            k = i.n(B), T = i("58ca");
        s["a"].config.productionTip = !1, s["a"].use(T["a"]), s["a"].use(k.a), new s["a"]({
            render: function (t) {
                return t(w)
            }
        }).$mount("#app")
    }, 5869: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAM1BMVEUAAADU1NTU1NTU1NTU1NTU1NTc3NzT09PU1NTV1dXU1NTU1NTU1NTX19fW1tbS0tLU1NSUFrHXAAAAEHRSTlMA35+A75AQQM9wvzBgIFBQVEJkVwAAAJ1JREFUKM99k1EOAyEIRGFFrXXbev/T1mQSSzOB92deBgmibNplWiSiPdbmSix5soGvWyQeYVBYL4exNqeV9TMvXn7ZIUw/tpHz1TsrH3+LZPEiadxwdzjXGuimaXMyDeXnGYaZb2Us+A+ON96PZ1faPrx0wfOza+1jW/LX+ofzTOH7w/0YpNVrtHzgQbYatgamhhbcGlrQ615+fMovYtsT8nNZhv0AAAAASUVORK5CYII="
    }, 5929: function (t, e, i) {
        t.exports = i.p + "img/prize.aecc1877.png"
    }, "5b7d": function (t, e, i) {
        t.exports = i.p + "img/q2-2.811b6eff.png"
    }, "5bac": function (t, e, i) {
        t.exports = i.p + "img/q2-3.4365176a.png"
    }, "77c2": function (t, e, i) {
        t.exports = i.p + "img/q3-2.89e590b4.png"
    }, "77ef": function (t, e, i) {
        t.exports = i.p + "img/pdf.d859ece2.png"
    }, 8577: function (t, e, i) {
        t.exports = i.p + "img/q3-6.821ca947.png"
    }, "85ec": function (t, e, i) {
    }, 8778: function (t, e, i) {
        t.exports = i.p + "img/q7-2.e63fa43d.png"
    }, "8af6": function (t, e, i) {
        t.exports = i.p + "img/q5-2.f81f4014.png"
    }, 9076: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABEVBMVEUAAADu7+/t8fDs8PDt8PDq7+/s8fDt8fDs8fDt8+/D68rs8fDE68vH78/q8e7s8fDG7Mzs8O/r7+6/78/E7Mrq7+zs8PDF7MvD68rP7dXD68rD68nk7enD6cnr7+vC6MjD68vv9/fH58/s8PDr8e7D68oDpojr8e/w9vLv9PLt8vHg/+fh/enH8M8Sq4/Y7t3J7c/o8OvV79o9uaLi7ebZ6N3p8eza8N/Q7tbN7dOU1cl3y7sutJwgr5Xe7One7uTO5+Pa++Le6eLV5drO4tPL7NFpxrXw//vo9e7q8+7k+u3l7une8eTP5+Pc8OHU9dzM79SGz8SHz8OHz8Hl8OrA4tyFz8Fbwq9MvakwtJwus5zSCwhTAAAAI3RSTlMAIN+QYBDvz7/Pz5+PIN+vn4BAEN+Qb1/v37+vn4BwcEAgIFjpEsAAAAJYSURBVEjHldbndtowGAZgL4wJKYQ0bbrXZyPbjDDDDJskzU7Tff8XUsmyLIxkN3n/cDj4OfKLrPNZEaMaelYzAUCzdENV/ptMSYNYXu8+SwX7Fmxn7Th7yUgtghB00xoko5cmSGLbR47jHBzKhA6QREh2xdpZuUCMODvPBZFIWo7UMCEnzIg90km8jwGJsUmXKB+ZULVUcjxgov+K7U8eUggx/XWfbGj14u4tFZ9XneWi010tu6uuSML0Wr3bs7M751NA3tmXi26ns+w2O4skclyr0UpvgiYgRCTNWq1H+5DN0dMEEsh7TDQQMxm1y+XxEBN+YzeUHMjv6/pPOcjJNSUA8P2q6dB8kW7jSTnM2GYEp0/JoazKsBxltEGajfCpsUTSJvc0HJK12hsE0NV8Pr/dkbWv42sfAL7hj/omga+VSqVaUEBORjICVUxMBXzP8+PkL7n2/p7IsbgKKOC67hYZ8fqnMVKlxHTxKl7M/eBkFiPn5xeY0PpxAr+Z+AWbAgUbq7FT73nAM6tTUZ8xgvieWvKn8iclD/y8cKInnPtT1l0khvy4INTGOw84+KotoipKwbZRlOi3ybg9kRINn5cSJIYTbnRMMmlC7B+MNespJE9H11NIODuLjyd5hUY1H0sKajTygGY6baYTQxgWDecolbwQRhImU4EgLnLxwZdzXUIuIYwvklxG2TYeJgjCuC7+HkQUvA8mDRAJ7yHG0NaDiHiY+J7PiPlBkUbdi/1hPl4pJEVVLgjKR4Cu5BNi7StpUXVtw2ChlcTaojJ0izhTy0pf4f4BxL8b3kL3ZiYAAAAASUVORK5CYII="
    }, 9347: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAdVBMVEUAAAAgl/MhlvQhlvIhlvQglvMgm/MhlfMhlvQilvQhlvMhl/QilvMhlvMhlvMglvMhl/MglvIol/ckl/MhlvP6+vo8o/Tf7fmbzvcvnPRZsPWOyPfs9Pm22/iAwvfR5/nE4fio1Pfs9Pq22/dyu/XD4fhyu/ZD2yNOAAAAFHRSTlMAIM/fkGAQ79+Pv5+vgHBAv6AgQNOvO0oAAAGCSURBVEjHndXpdoIwEIbhQBLZ1dqPHVG73f8ltjGCLMmQ+vx/D5kzOYStnWTk8wAAjyPpsU27jGMmjOjq/QiDxB55KVboaB/AKpSmIgIpWo/tY4O/2yi2G1VsN9Qc2/NIaHWhEM1+3EeIuyrXetgEw34SaPlDCav08RG4JzjojyyTDyKJZx9BOTQF0ajlCAwuQ9IQSfaXhBhUQ1IRSTg9F75chsGJSYyK3OVkUo2ynv9MJILFeGpdhvEZx1Otg64FOT+mrqq4ghTMk4YeXpsn+FRJWdNJgKmiU82ZTjhmeof1+zAcLW+htOfGdJcF5upSL7PWF6ismnq5SomFQjdlMV6Grry00wvjwdLk13wCI48xbm2MCWeMZVipb/ZEqH8rDPrOltx/SzEMips5SZhyALajyUeUFJaovyyThGleAJvip/ounzeIe+OTB0eSjQSciP8/SS8/fK8/r9vzCGYgOayCPTPy3mCR6n24R8cDo3iCY4Znemy6kiJWXcB9IQ0n+gXeeZolqNvjnwAAAABJRU5ErkJggg=="
    }, a2f9: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU1SURBVHgB1ZrLbxtVFMa/O3PthD5gaItEWqq4QrChUlLEglXrCLGqRHjsmwYSITZ5lD1N+AOo2w1SUgjpig1qu2CFqsasuoE4EmxgEUfQhIdSTdu0auyZuT1n4nHtxBPPy4nzkyzbM3c857vnnHuu7x2BhOicWcmUy3ZWCPQ4EFkoGPTZoFOG10YpFIUQRQGnoIReSOnIPxnsKiIBBGJgzCwaD6zOUSjnPBmdQRQEiVPqhpT65TiiIgmR0ytZBXWR+jiLJBH4LqVrk1EEhRLS+TWFj64uQaj30UoiCAosRJv6Z1QIewI1Md9SKOTorhP2UNdssOYB0KaXLwmoMewCAiJnDR8db95uGziZ16z0bQX0Yheh+xccWerD4AnTr42vkHYR4dFMjOZ3YTuJYKjHezWyye98QyGcE+0kwoPFSLLN51w9+tTf5yHEDNoY5Yhx59OjudpjdUI26oRzG1Gr9M5hpqR2qrbO1IVWOeVc3AMiGKNcVnUhVvWI6w3pLGIPQZPPPmv4+Bx/rnrE9cYeQ0Gv2ux6ZLe9YaQFRk4ewJmuNLoPSLx1/T+YJRXoWluWXuTaIvmLlbLHoGLN6CPBhn/x5kF676g7/l73c7j25+NAvyGt9JgFTLhCaDjrxw7p8Hp/5I39MDoa1+OlNQtBof4foLcJsRNhxcZzr4+c3L+l9xshry4jDDQUn5Bl3c6iRe7g0Onv7sS51/Zt6X1z3cGV3x9RTugYeH1f9Xh+ZR1hsR07K4WGXhUsrwLBvc+G92c6fXufjf04b2KUQqxWBLOwWkZYyP5eqZTW484tY8K97448L6d9Y5+98MnPJm4uPcE3p40tIpgoHqFEOUNCVEZEjKwgietx5bc1fPnrQ/fzLx+8hJ7DqYbtims2wkIJb8iwqx9sPBvRaNhsaNhDy/VCfqXk5sOts0eQOag3bGuWHAqt4CNWFVp6kkHbhul916hKMnteaCaCiZIfnnmBhbARfuGwGS+Zlyph0nMohR/ePbStiI3rSogKd60ZpOGHP91z45xDxQ/2woU79/HOj6tVETwI3Dp7uKkIJlKiVxDa1N3FsHnCnuHRiUcdz0uzfzzG5ySido50js5/ezr46tGRayuB51h10NKRpMU2M2xB5Fjml1fQOGc2xzcPBvwKCns6kgi4S0ZFTRPIIwYcQnFFMAv3Iic64SxoykEBCcKJHVYEEyfR6X/JvGbb+hwSxOiIVl1jDL2waXtCw2ddRd63QEIY6eY1phGRhfAaMS1CuHelPAm0UByEF2qEcAK/+v2/1aLox8JqKUaiq5v87t7VkqUcEsKrFyzCqycs5COqQ341qBBlWlLB0nXX9o3uc9dTxRwSolaEB894+Vijohe5ENI+CiprW9qzY/YkEiC/vE6LB//XifDgYyxmc6hFHXpt2gzyPtcNMfrU8vWW70ZV4BnBV28/7yb5hTsPEBryhj10bPDZ11ro/7sunXns1K5UVGikIm/0wW/J1B2KoRIJsdaiTWDT/uKWQd8ZfiUnhHMZbQrb1mhf0bcMa9N350Wb7ZGQPQVr+NipRud8yzBvc/F2F9oEVwRvvfmf3wbaR+Ttrt32TFVElM3QWuTVv3K0bDSKXYBzwho63nRrPNAMz/0hpQaR4OQyAKYGNR5EBBNuzu3WGX76QQyglShxw06JcbTiEY46WiRICJrvKXvS24UKdS3iQIKkbo0paP2I9ZiTM2tJK7ddMjf/maRgL9HKPv0/6FWazuvJGcqpTE0Lk+5mCkXvyskriEIqpc8l9eDZU8lsOp/LVrm0AAAAAElFTkSuQmCC"
    }, b602: function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC2SURBVHgBrc/PDcIgFMfxH1ATx2AU3cCr8eAcvenF6q1u4KmM0VUYwaOJf55AYtS2aB70ewBCyCcPgZEqTDUrACswQqo5rAE6ueNZIrMPDILomDVhB9veVuUmGRzCwhkJxbAk8BfGBv9h4V6ZfQuCngiaX5alzcF80mNu11cS7dRUOgcL4N1N5nYbQzlYeBNWhyiHedTjr+9zsTc4gJJELR6oOdg32EfBxfpgB+Vi8Tza7BZI6AnpdY6zdx2IIQAAAABJRU5ErkJggg=="
    }, b626: function (t, e, i) {
        "use strict";
        i("5259")
    }, c192: function (t, e) {
        t.exports = "data:image/png;base64,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"
    }, c47f: function (t, e) {
        t.exports = "data:image/png;base64,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"
    }, c642: function (t, e, i) {
        t.exports = i.p + "img/q1-3.21f38d3a.png"
    }, c738: function (t, e, i) {
    }, d03a: function (t, e, i) {
        t.exports = i.p + "img/books.1df10150.png"
    }, d055: function (t, e, i) {
        t.exports = i.p + "img/q1-4.e48d9beb.png"
    }, ddf4: function (t, e, i) {
        t.exports = i.p + "img/q1-1.2d7dbd86.png"
    }, defd: function (t, e, i) {
        t.exports = i.p + "img/q2-4.c6073464.png"
    }, df2d: function (t, e, i) {
        t.exports = i.p + "img/q8-2.1bb1077b.png"
    }, e131: function (t, e, i) {
        t.exports = i.p + "img/spot.f17203b4.png"
    }, f30b: function (t, e, i) {
        t.exports = i.p + "img/q5-1.a014d808.png"
    }, f745: function (t, e, i) {
        t.exports = i.p + "img/q3-4.3ec60d88.png"
    }, f8f1: function (t, e, i) {
        t.exports = i.p + "img/q3-3.c1803cfd.png"
    }, fe59: function (t, e, i) {
        t.exports = i.p + "img/mistake.7e5d7fc1.png"
    }
});
//# sourceMappingURL=app.19788810.js.map