! function(e) {
    "use strict";
    let t = {
        classes: {
            main: "nk-menu",
            item: "nk-menu-item",
            link: "nk-menu-link",
            toggle: "nk-menu-toggle",
            dropdown: "nk-menu-dropdown",
            dropdownparent: "has-dropdown",
            active: "active",
            current: "current-page"
        }
    };
    e.Dropdown = {
        load: function(e, t) {
            let s = e.parentElement;
            s.classList.contains(t) || s.classList.add(t)
        },
        toggle: function(t, s) {
            let a = t.parentElement,
                o = t.nextElementSibling,
                n = o.children.length > 5 ? 400 + 10 * o.children.length : 400;
            a.classList.contains(s) ? (a.classList.remove(s), e.SlideUp(o, n)) : (a.classList.add(s), e.SlideDown(o, n))
        },
        closeSiblings: function(t, s, a, o) {
            let n = t.parentElement,
                r = n.parentElement.children;
            Array.from(r).forEach(t => {
                if (t !== n && (t.classList.remove(s), t.classList.contains(a))) {
                    t.querySelectorAll("." + o).forEach(t => {
                        t.parentElement.classList.remove(s), e.SlideUp(t, 400)
                    })
                }
            })
        }
    }, e.Dropdown.header = function(s) {
        const a = document.querySelectorAll(s);
        let o = t.classes.active,
            n = t.classes.dropdownparent,
            r = t.classes.dropdown,
            i = e.body.dataset.menuCollapse ? e.Break[e.body.dataset.menuCollapse] : e.Break.lg;
        a.forEach(t => {
            e.Dropdown.load(t, n), t.addEventListener("click", (function(s) {
                s.preventDefault(), e.Win.width < i && (e.Dropdown.toggle(t, o), e.Dropdown.closeSiblings(t, o, n, r))
            }))
        })
    };
    let s = {
            root: "nk-header-main",
            base: "nk-header-menu",
            toggle: "header-menu-toggle", 
            toggleActive: "active",
            active: "header-menu-active",
            overlay: "header-menu-overlay",
            body: "header-menu-shown"
        },
        a = {
            main: e.body.dataset.menuCollapse ? e.Break[e.body.dataset.menuCollapse] : e.Break.lg
        };
    e.Navbar = {
        show: function(t, a) {
            t.forEach(e => {
                e.classList.add(s.toggleActive)
            }), a.classList.add(s.active), e.body.classList.add(s.body);
            let o = `<div class='${s.overlay}'></div>`;
            a.insertAdjacentHTML("beforebegin", o)
        },
        hide: function(t, a) {
            t.forEach(e => {
                e.classList.remove(s.toggleActive)
            }), a.classList.remove(s.active), e.body.classList.remove(s.body);
            let o = document.querySelector("." + s.overlay);
            setTimeout(() => {
                o && o.remove()
            }, 400)
        },
        mobile: function(t) {
            a.main < e.Win.width ? t.classList.remove("menu-mobile") : setTimeout(() => {
                t.classList.add("menu-mobile")
            }, 500)
        },
        sticky: function(e) {
            let t = document.querySelectorAll(e);
            t.length > 0 && t.forEach(e => {
                let t = e.offsetTop;
                window.addEventListener("scroll", (function() {
                    window.scrollY > t ? e.classList.add("has-fixed") : e.classList.remove("has-fixed")
                }))
            })
        },
        height: function(e) {
            let t = document.querySelectorAll(e);
            t.length > 0 && t.forEach(e => {
                document.querySelector("html").style.setProperty("--header-main-height", e.offsetHeight + "px")
            })
        }
    }, e.Navbar.init = function() {
        let t = document.querySelector("." + s.base),
            o = document.querySelectorAll("." + s.toggle);
        o.forEach(n => {
            e.Navbar.mobile(t), n.addEventListener("click", (function(n) {
                n.preventDefault(), a.main > e.Win.width && (t.classList.contains(s.active) ? e.Navbar.hide(o, t) : e.Navbar.show(o, t))
            })), window.addEventListener("resize", (function(s) {
                a.main < e.Win.width && e.Navbar.hide(o, t), e.Navbar.mobile(t)
            })), document.addEventListener("mouseup", (function(a) {
                null === a.target.closest("." + s.base) && e.Navbar.hide(o, t)
            }))
        }), e.Navbar.sticky(".nk-header ." + s.root), window.addEventListener("scroll", (function() {
            e.Navbar.height(".nk-header ." + s.root)
        })), window.addEventListener("resize", (function() {
            e.Navbar.height(".nk-header ." + s.root)
        }))
    }, e.CurrentLink = function(t, s, a, o, n, r) {
        let i = document.querySelectorAll(t),
            l = document.location.href,
            c = l.substring(0, -1 == l.indexOf("#") ? l.length : l.indexOf("#")),
            d = c.substring(0, -1 == c.indexOf("?") ? c.length : c.indexOf("?"));
        i.forEach((function(t) {
            var i = t.getAttribute("href");
            if (d.match(i)) {
                e.getParents(t, "." + o, s).forEach(e => {
                    e.classList.add(...n);
                    let t = e.querySelector("." + a);
                    null !== t && (t.style.display = "block")
                }), r && t.scrollIntoView({
                    block: "end"
                })
            } else t.parentElement.classList.remove(...n)
        }))
    }, e.Addons.swiperCarousel = function(e) {
        let t = document.querySelectorAll(e);
        t.length > 0 && t.forEach(e => {
            let t = e.dataset.breakpoints ? JSON.parse(e.dataset.breakpoints) : null,
                s = !!e.dataset.autoplay && JSON.parse(e.dataset.autoplay),
                a = !!e.dataset.loop && JSON.parse(e.dataset.loop),
                o = !!e.dataset.centeredslides && JSON.parse(e.dataset.centeredslides),
                n = e.dataset.slidesperview ? e.dataset.slidesperview : 1,
                r = e.dataset.speed ? parseInt(e.dataset.speed) : 900,
                i = e.dataset.spaceBetween ? parseInt(e.dataset.spaceBetween) : 0,
                l = e.dataset.effect ? e.dataset.effect : "slide";
            new Swiper(e, {
                centeredSlides: o,
                slidesPerView: n,
                loop: a,
                speed: r,
                autoplay: s,
                spaceBetween: i,
                effect: l,
                watchSlidesProgress: !0,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: !0
                },
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                    clickable: !0
                },
                breakpoints: t
            })
        })
    }, e.Addons.glightbox = function() {
        GLightbox({
            touchNavigation: !0,
            loop: !0,
            autoplayVideos: !1
        })
    }, e.Addons.typed = function(e) {
        let t = document.querySelectorAll(e);
        t.length > 0 && t.forEach(e => {
            console.log();
            let t = JSON.parse("[" + e.dataset.strings + "]");
            new Typed(e, {
                strings: t,
                typeSpeed: 100,
                backSpeed: 0,
                backDelay: 1e3,
                startDelay: 0,
                loop: !0
            })
        })
    }, e.Addons.pristine = function(e, t) {
        let s = "form-control-wrap";
        return new Pristine(e, {
            classTo: s,
            errorClass: "form-error",
            successClass: "form-sucess",
            errorTextParent: s,
            errorTextTag: "span",
            errorTextClass: "form-error-message"
        }, t)
    }, e.Custom.priceToggle = function(e) {
        let t = document.querySelectorAll(e);
        t && t.forEach(e => {
            e.addEventListener("click", (function() {
                let t = e.closest("." + e.dataset.parent),
                    s = document.querySelectorAll("." + e.dataset.target);
                console.log(s), t.classList.contains("pricing-yearly") ? t.classList.remove("pricing-yearly") : t.classList.add("pricing-yearly"), s.forEach(e => {
                    e.classList.contains("show-yearly") ? e.classList.remove("show-yearly") : e.classList.add("show-yearly")
                })
            }))
        })
    }, e.Custom.showHidePassword = function(e) {
        let t = document.querySelectorAll(e);
        t && t.forEach(e => {
            e.addEventListener("click", (function(t) {
                t.preventDefault();
                let s = document.getElementById(e.getAttribute("href"));
                "password" == s.type ? (s.type = "text", e.classList.add("is-shown")) : (s.type = "password", e.classList.remove("is-shown"))
            }))
        })
    }, e.Custom.darkmode = function(e) {
        let t = document.querySelectorAll(e);
        t && t.forEach(e => {
            e.addEventListener("click", (function() {
                document.body.classList.contains("is-dark") ? document.body.classList.remove("is-dark") : document.body.classList.add("is-dark"), t.forEach(e => {
                    e.classList.contains("dark-active") ? e.classList.remove("dark-active") : e.classList.add("dark-active")
                })
            }))
        })
    }, e.Custom.init = function() {
        e.Navbar.init(), e.Addons.swiperCarousel(".swiper-init"), e.Addons.typed(".type-init"), e.Addons.glightbox(), e.Custom.submitForm(""), e.Custom.priceToggle(".pricing-toggle"), e.Custom.showHidePassword(".password-toggle"), e.Custom.darkmode(".dark-mode-toggle"), e.Dropdown.header("." + t.classes.toggle), e.CurrentLink("." + t.classes.link, t.classes.item, t.classes.sub, t.classes.main, [t.classes.active, t.classes.current], !0)
    }, e.BS.init = function() {
        e.BS.tooltip('[data-bs-toggle="tooltip"]')
    }, e.init = function() {
        e.winLoad(e.BS.init), e.winLoad(e.Custom.init)
    }, e.init()
}(NioApp);