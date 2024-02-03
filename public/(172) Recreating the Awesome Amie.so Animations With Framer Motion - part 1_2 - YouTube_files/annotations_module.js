(function (g) {
    var window = this; 'use strict'; var Y3 = function (a) { a.oa("cardstatechange", a.Fk() && a.Vo() ? 1 : 0) }, Z3 = function (a, b) {
        var c = g.bb(b), d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) { if (null == a) return; a = a[d[c]] } return a
    }, rlb = function (a) {
        var b = g.As(a);
        a = g.Ds(a); return new g.os(b.x, b.y, a.width, a.height)
    }, slb = function (a, b, c) {
        var d = void 0 === d ? {} : d;
        var e; return e = g.aD(a, b, function () { g.bD(e); c.apply(a, arguments) }, d)
    }, b4 = function (a) {
        a = g.gb(a);
        delete $3[a]; g.nd($3) && a4 && a4.stop()
    }, ulb = function () {
        a4 || (a4 = new g.cv(function () { tlb() }, 20));
        var a = a4; a.isActive() || a.start()
    }, tlb = function () {
        var a = g.ob();
        g.ad($3, function (b) { vlb(b, a) });
        g.nd($3) || ulb()
    }, c4 = function (a, b, c, d) {
        g.xv.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays"); if (a.length != b.length) throw Error("Start and end points must be the same length"); this.B = a; this.N = b; this.duration = c; this.G = d; this.coords = []; this.progress = this.K = 0; this.D = null
    }, vlb = function (a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime); 1 < a.progress && (a.progress = 1); a.K = 1E3 / (b - a.D); a.D = b; wlb(a, a.progress); 1 == a.progress ? (a.j = 0, b4(a), a.onFinish(), a.Zq()) : a.isPlaying() && a.pL()
    }, wlb = function (a, b) {
        "function" === typeof a.G && (b = a.G(b));
        a.coords = Array(a.B.length); for (var c = 0; c < a.B.length; c++)a.coords[c] = (a.N[c] - a.B[c]) * b + a.B[c]
    }, xlb = function (a, b) {
        g.Bb.call(this, a);
        this.coords = b.coords; this.x = b.coords[0]; this.y = b.coords[1]; this.z = b.coords[2]; this.duration = b.duration; this.progress = b.progress; this.fps = b.K; this.state = b.j
    }, d4 = function (a, b, c, d, e) {
        c4.call(this, b, c, d, e);
        this.element = a
    }, ylb = function (a, b, c, d, e) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        d4.call(this, a, b, c, d, e)
    }, zlb = function (a) { return Math.pow(a, 3) }, Alb = function (a) { return 3 * a * a - 2 * a * a * a }, Blb = function (a) {
        g.I.call(this);
        this.B = a || window; this.j = []
    }, e4 = function (a) { return a.baseUrl || null }, f4 = function (a, b) { return g.wt(g.Lr(a, b), function (c) { return !!c }) }, Clb = function (a, b, c) {
        function d(ua) {
            var ma = ua.hovercardButton;
            if (!ma) return null; ma = ma.subscribeButtonRenderer; if (!ma) return null; var sa = f(ma.unsubscribedButtonText), da = f(ma.subscribedButtonText); if (ma.subscribed) { var ba = f(ma.subscriberCountWithUnsubscribeText); var La = f(ma.subscriberCountText) } else ba = f(ma.subscriberCountText), La = f(ma.subscriberCountWithSubscribeText); var y = null; if (ua.signinEndpoint) {
                y = Z3(ua, "signinEndpoint", "webNavigationEndpointData", "url"); if (!y) {
                    var Z, Ta; y = null == (Ta = g.U(null == (Z = ma.signInEndpoint) ? void 0 : Z.commandMetadata, g.T2)) ? void 0 :
                        Ta.url
                } if (!y) return null
            } return sa && (da || y) ? { subscribed: ma.subscribed, subscribeText: sa, subscribeCount: ba, unsubscribeText: da, unsubscribeCount: La, enabled: ma.enabled, signinUrl: y, classic: ua.useClassicSubscribeButton } : null
        }
        function e(ua) { if (ua) { var ma = [], sa = ua.videoId; sa && ma.push("v=" + sa); (sa = ua.playlistId) && ma.push("list=" + sa); (ua = ua.startTimeSeconds) && ma.push("t=" + ua); return "/watch?" + ma.join("&") } }
        function f(ua) { if (!ua) return null; var ma = ua.simpleText; return ma ? ma : ua.runs ? g.Lr(ua.runs, function (sa) { return sa.text }).join("") : null }
        b = b.endscreenElementRenderer; if (!b) return null; var h = b.style, l = b.endpoint || {}, m = null, n = null, p = !1, q = null, r = null, t = null, v = null, x = !1, B = null, E = null, F = null, G = null, P = null, Q = null; if ("VIDEO" === h) g.U(l, g.RG) ? m = g.U(l, g.RG).url : (Q = g.U(l, g.CT), m = e(Q)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, r = f(p.text), p = "LIVE" === p.style) : r = f(b.videoDuration); else if ("PLAYLIST" === h) g.U(l, g.RG) ? m = g.U(l, g.RG).url : (Q = g.U(l, g.CT), m = e(Q)), n = !1, q = a, t = f(b.playlistLength); else if ("CHANNEL" ===
            h) { if (x = Z3(l, "browseEndpoint", "browseId")) v = x, m = "/channel/" + v; n = !1; q = "new"; (x = !!b.isSubscribe) ? B = d(b) : E = f(b.subscribersText) } else "WEBSITE" === h ? ((F = Z3(l, "urlEndpoint", "url")) && (m = F), n = !0, q = "new", F = b.icon.thumbnails[0].url) : "CREATOR_MERCHANDISE" === h && (b.productPrice && (G = f(b.productPrice)), b.additionalFeesText && (P = f(b.additionalFeesText)), (n = Z3(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new"); a = Z3(b, "title", "accessibility", "accessibilityData", "label"); var R = b.endpoint ? b.endpoint.clickTrackingParams : null,
                ha = ""; if (b.metadata) { var wa = f(b.metadata); wa && (ha = wa) } return {
                    id: "element-" + c, type: h, title: f(b.title), metadata: ha, callToAction: f(b.callToAction), OV: b.Image, iconUrl: F, left: Number(b.left), width: Number(b.width), top: Number(b.top), aspectRatio: Number(b.aspectRatio), startMs: Math.floor(Number(b.startMs)), endMs: Math.floor(Number(b.endMs)), videoDuration: r, PD: p, playlistLength: t, channelId: v, subscribeButton: B, subscribersText: E, isSubscribe: x, targetUrl: m || null, W7: n, sessionData: R ? { itct: R } : null, tca: q, qC: a ? a : null, isPlaceholder: b.isPlaceholder,
                    impressionUrls: f4(b.impressionUrls || [], e4), J7: f4(b.hovercardShowUrls || [], e4), clickUrls: f4(l.loggingUrls || [], e4), visualElement: g.QF(b.trackingParams), productPrice: G, additionalFeesText: P, watchEndpoint: Q || null
                }
    }, Dlb = function (a, b) {
        var c = {
            startMs: Math.floor(Number(a.startMs)),
            impressionUrls: f4(a.impressionUrls || [], e4), elements: f4(a.elements || [], function (d, e) { return Clb(b, d, e) })
        };
        a.trackingParams && (c.visualElement = g.QF(a.trackingParams)); return c
    }, Elb = function (a) {
        g.YV.call(this, a);
        this.C = this.endscreen = null; this.j = {}; this.G = {}; this.D = this.B = null; this.N = []; this.W = !0; this.K = 0; a = a.U(); this.Z = g.vS(a) || g.xS(a); this.events = new g.hL(this); g.M(this, this.events); this.events.T(this.player, g.vK("creatorendscreen"), this.onCueRangeEnter); this.events.T(this.player, g.wK("creatorendscreen"), this.onCueRangeExit); this.events.T(this.player, "resize", this.Yb); this.events.T(window, "focus", this.Faa); this.load(); var b = g.tf("STYLE"); (g.Ze("HEAD")[0] || document.body).appendChild(b); this.addOnDisposeCallback(function () { g.yf(b) });
        b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
            0))
    }, Flb = function (a) { return a.player.getVideoData().If ? "current" : a.Z ? "new" : "current" }, g4 = function (a) { return "creator-endscreen-editor" === a.player.U().playerStyle }, Glb = function (a) {
        var b = a.player.getVideoData(), c = b.videoId;
        a.C && a.C.abort(); c = {
            method: "POST", onFinish: function (e) { var f = a.C = null; 200 === e.status && (e = e.responseText, ")]}" === e.substring(0, 3) && (e = e.substring(3), f = JSON.parse(e), f = Dlb(f, Flb(a)))); h4(a, f) },
            urlParams: { v: c }, withCredentials: !0
        }; a.Z && (c.urlParams.ptype = "embedded"); var d = b.Bx; d && (c.postParams = { ad_tracking: d }); if (b = g.OSa(b)) if (b = g.lo(b), b = g.ke(b)) a.C = g.sC(b, c)
    }, h4 = function (a, b, c) {
        c = void 0 === c ? !0 : c;
        a.player.zf("creatorendscreen"); a.B && (a.B.dispose(), a.B = null, a.D.dispose(), a.D = null); for (var d = g.u(Object.values(a.j)), e = d.next(); !e.done; e = d.next())e.value.dispose(); a.j = {}; a.G = {}; 0 < a.N.length && (a.N.forEach(function (l) { l.dispose() }), a.N.length = 0);
        a.K = 0; if ((a.endscreen = b) && b.elements) {
            c && Hlb(a); c = []; d = new g.uK(b.startMs, 0x7ffffffffffff, { id: "ytp-ce-in-endscreen", namespace: "creatorendscreen" }); c.push(d); a.player.U().B || (a.B = new g.V({ I: "div", S: "ytp-ce-shadow" }), g.KU(a.player, a.B.element, 4), a.D = new g.dH(a.B, 200)); for (d = 0; d < b.elements.length; ++d) {
                e = b.elements[d]; var f = Ilb(a, e); if (f) { a.j[e.id] = f; a.G[e.id] = e; g.KU(a.player, f.element, 4); var h = new g.uK(e.startMs, e.endMs, { id: "ytp-ce-element-" + e.id, namespace: "creatorendscreen" }); c.push(h); Jlb(a, f, e) } else g.WF(new g.rD("buildEndscreenElement null",
                    e))
            } a.player.sf(c); a.Yb()
        }
    }, Hlb = function (a) {
        var b = g.RF(), c = g.SF();
        c && b && a.endscreen.visualElement && g.aC(g.kG)(void 0, c, b, a.endscreen.visualElement)
    }, Ilb = function (a, b) {
        var c = null;
        switch (b.type) {
            case "VIDEO": a = {
                I: "div", Ma: ["ytp-ce-element", "ytp-ce-video"], Y: { tabindex: "0", "aria-label": b.qC || "", "aria-hidden": "true" }, V: [{ I: "div", S: "ytp-ce-element-shadow" }, { I: "div", S: "ytp-ce-covering-Image", Y: i4(b) }, { I: "div", S: "ytp-ce-covering-shadow-top" }, {
                    I: "a", S: "ytp-ce-covering-overlay", Y: { href: j4(a, b.targetUrl), tabindex: "-1" }, V: [{ I: "div", Ma: ["ytp-ce-video-title", "ytp-webkit-ellipsis"], Y: { dir: g.Cv(b.title || "") }, ya: b.title }, {
                        I: "div", S: b.PD ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                        ya: b.videoDuration || void 0
                    }]
                }]
            }; c = new g.V(a); break; case "PLAYLIST": a = {
                I: "div", Ma: ["ytp-ce-element", "ytp-ce-playlist"], Y: { tabindex: "0", "aria-label": b.qC || "", "aria-hidden": "true" }, V: [{ I: "div", S: "ytp-ce-element-shadow" }, { I: "div", S: "ytp-ce-covering-Image", Y: i4(b) }, { I: "div", S: "ytp-ce-covering-shadow-top" }, {
                    I: "a", S: "ytp-ce-covering-overlay", Y: { href: j4(a, b.targetUrl), tabindex: "-1" }, V: [{ I: "div", Ma: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"], Y: { dir: g.Cv(b.title || "") }, ya: b.title }, {
                        I: "div", S: "ytp-ce-playlist-count",
                        V: [{ I: "div", S: "ytp-ce-playlist-icon" }, { I: "div", S: "ytp-ce-playlist-count-text", ya: b.playlistLength || void 0 }]
                    }]
                }]
            }; c = new g.V(a); break; case "CHANNEL": c = {
                I: "div", Ma: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"], Y: { tabindex: "0", "aria-label": b.qC || "", "aria-hidden": "true" }, V: [{ I: "div", S: "ytp-ce-element-shadow" }, {
                    I: "div", S: "ytp-ce-expanding-overlay", V: [{ I: "div", S: "ytp-ce-expanding-overlay-hider" }, { I: "div", S: "ytp-ce-expanding-overlay-background" }, {
                        I: "div", S: "ytp-ce-expanding-overlay-content",
                        V: [{
                            I: "div", S: "ytp-ce-expanding-overlay-body", V: [{
                                I: "div", S: "ytp-ce-expanding-overlay-body-padding", V: [{ I: "a", Ma: ["ytp-ce-channel-title", "ytp-ce-link"], Y: { href: j4(a, b.targetUrl), target: "_blank", tabindex: "-1", dir: g.Cv(b.title || "") }, ya: b.title }, b.subscribeButton ? { I: "div", S: "ytp-ce-subscribe-container", V: [{ I: "div", S: "ytp-ce-channel-subscribe" }] } : "", b.subscribersText ? { I: "div", S: "ytp-ce-channel-subscribers-text", ya: b.subscribersText } : "", b.metadata ? {
                                    I: "div", Ma: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                        "yt-ui-ellipsis-3"], ya: b.metadata
                                } : ""]
                            }]
                        }]
                    }]
                }, { I: "div", S: "ytp-ce-expanding-Image", Y: i4(b) }]
            }; c = new g.V(c); var d = g.$e(document, "div", "ytp-ce-channel-subscribe", c.element)[0]; if (b.subscribeButton && b.channelId) {
                g.kv(d, "ytp-ce-subscribe-button"); if (a.player.U().B) { var e = null; var f = b.sessionData.itct } else e = "endscreen", f = null; e = new g.FW(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic,
                    b.channelId, !!b.subscribeButton.subscribed, e, f, a.player, !1); d.appendChild(e.element); a.N.push(e)
            } break; case "WEBSITE": a = {
                I: "div", Ma: ["ytp-ce-element", "ytp-ce-website"], Y: { tabindex: "0", "aria-label": b.qC || "", "aria-hidden": "true" }, V: [{ I: "div", S: "ytp-ce-element-shadow" }, {
                    I: "div", S: "ytp-ce-expanding-overlay", V: [{ I: "div", S: "ytp-ce-expanding-overlay-hider" }, { I: "div", S: "ytp-ce-expanding-overlay-background" }, {
                        I: "div", S: "ytp-ce-expanding-overlay-content", V: [{
                            I: "div", S: "ytp-ce-expanding-overlay-body", V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-body-padding", V: [{ I: "div", S: "ytp-ce-website-title", Y: { dir: g.Cv(b.title || "") }, ya: b.title }, { I: "div", S: "ytp-ce-website-metadata", ya: b.metadata }, { I: "a", Ma: ["ytp-ce-website-goto", "ytp-ce-link"], Y: { href: j4(a, b.targetUrl), target: "_blank", tabindex: "-1" }, ya: b.callToAction }]
                            }]
                        }]
                    }]
                }, { I: "div", S: "ytp-ce-expanding-Image", Y: i4(b) }, { I: "div", S: "ytp-ce-expanding-icon", Y: Klb(b.iconUrl) }]
            }; c = new g.V(a); break; case "CREATOR_MERCHANDISE": c = "", b.productPrice && (c = {
                I: "div", S: "ytp-ce-merchandise-price-container",
                V: [{ I: "div", S: "ytp-ce-merchandise-price", ya: b.productPrice }]
            }, b.additionalFeesText && c.V.push({ I: "div", S: "ytp-ce-merchandise-additional-fees", ya: b.additionalFeesText })), a = {
                I: "div", Ma: ["ytp-ce-element", "ytp-ce-merchandise"], Y: { tabindex: "0", "aria-label": b.qC || "", "aria-hidden": "true" }, V: [{ I: "div", S: "ytp-ce-element-shadow" }, {
                    I: "div", S: "ytp-ce-expanding-overlay", V: [{ I: "div", S: "ytp-ce-expanding-overlay-hider" }, { I: "div", S: "ytp-ce-expanding-overlay-background" }, {
                        I: "div", S: "ytp-ce-expanding-overlay-content",
                        V: [{ I: "div", S: "ytp-ce-expanding-overlay-body", V: [{ I: "div", S: "ytp-ce-expanding-overlay-body-padding", V: [{ I: "div", S: "ytp-ce-merchandise-title", Y: { dir: g.Cv(b.title || "") }, ya: b.title }, c, { I: "div", S: "ytp-ce-merchandise-metadata", ya: b.metadata }, { I: "a", Ma: ["ytp-ce-merchandise-goto", "ytp-ce-link"], Y: { href: j4(a, b.targetUrl), target: "_blank", tabindex: "-1" }, ya: b.callToAction }] }] }]
                    }]
                }, { I: "div", S: "ytp-ce-expanding-Image", Y: i4(b) }, {
                    I: "div", S: "ytp-ce-merchandise-invideo-cta-container", V: [{
                        I: "div", S: "ytp-ce-merchandise-invideo-cta",
                        ya: b.callToAction || void 0
                    }]
                }]
            }, c = new g.V(a)
        }b.isPlaceholder && g.kv(c.element, "ytp-ce-placeholder"); return c
    }, i4 = function (a) {
        if (a.OV) var b = a.OV.thumbnails;
        return Klb(b ? b[b.length - 1].url : null)
    }, Klb = function (a) { return a ? { style: "background-Image: url(" + a + ")" } : {} }, Jlb = function (a, b, c) {
        function d(m) { m && (b.Ra("blur", function () { "none" != m.style.display && a.W && m.focus() }), b.T(m, "focus", f), b.T(m, "blur", h)) }
        function e(m) { a.K += m; 0 < a.K ? (g.kv(b.element, "ytp-ce-force-expand"), k4(a, c.id, !0)) : (g.mv(b.element, "ytp-ce-force-expand"), g.mv(b.element, "ytp-ce-element-hover"), k4(a, c.id, !1)) }
        function f() { e(1) }
        function h() { e(-1) }
        b.Ra("mouseenter", function () { Llb(a, b, c) });
        b.Ra("mouseleave", function () { Mlb(a, b, c) });
        a.player.U().B || b.Ra("click", function () { g.kv(b.element, "ytp-ce-element-hover") });
        b.Ra("click", function (m) { Nlb(a, c, m) });
        b.Ra("keypress", function (m) { Nlb(a, c, m) });
        b.Ra("focus", function () { Llb(a, b, c) });
        b.Ra("blur", function () { Mlb(a, b, c) });
        b.Ra("touchstart", function () { Llb(a, b, c) });
        var l = g.df("ytp-ce-expanding-overlay-hider", b.element); l && b.T(l, "touchstart", function (m) { m.stopPropagation(); g.mv(b.element, "ytp-ce-element-hover"); g.mv(b.element, "ytp-ce-force-expand") });
        b.Ra("keydown", function (m) { a.W = 9 === m.keyCode && !m.shiftKey });
        d(g.df("ytp-sb-subscribe", b.element)); d(g.df("ytp-sb-unsubscribe", b.element)); b.Ra("focus", f); b.Ra("blur", h)
    }, Nlb = function (a, b, c) {
        if (b.targetUrl && (!c || "keypress" !== c.type || 13 === c.keyCode)) {
            for (var d = c.target; d && !g.jv(d, "ytp-ce-element");) {
                g.jv(d, "subscribe-label") && Olb(a, b);
                if (g.jv(d, "ytp-ce-channel-subscribe")) return; d = g.zf(d)
            } if (!d || g.jv(d, "ytp-ce-element-hover")) {
                c.preventDefault(); c.stopPropagation(); if (d = a.j[b.id]) Mlb(a, d, b), d.element.blur(); if (c.ctrlKey || c.metaKey || "new" === b.tca) Olb(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.lo(j4(a, b.targetUrl)), g.FH(g.ke(c), void 0, b.sessionData); else {
                    var e = g.FS(a.player.U()) || a.player.getVideoData().If, f = function () {
                        var h = j4(a, b.targetUrl), l = b.sessionData, m = b.watchEndpoint, n = g.fC(h); e && n && (n.v ||
                            n.list) ? a.player.Bo(n.v, l, n.list, !1, void 0, m || void 0) : g.$wa(h, l)
                    };
                    Olb(a, b, function () { a.player.sendVideoStatsEngageEvent(17, f) })
                }
            }
        }
    }, j4 = function (a, b) {
        a = a.player.U();
        if (b) { if (b.startsWith("//")) return a.protocol + ":" + b; if (b.startsWith("/")) return g.MS(a) + b } else return ""; return b
    }, Llb = function (a, b, c) { g.jv(b.element, "ytp-ce-element-hover") || ("VIDEO" === c.type || "PLAYLIST" === c.type ? g.kv(b.element, "ytp-ce-element-hover") : a.player.U().B ? (new g.cv(function () { g.kv(b.element, "ytp-ce-element-hover") }, 200)).start() : g.kv(b.element, "ytp-ce-element-hover"), l4(a, c.J7), k4(a, c.id, !0)) }, Mlb = function (a, b, c) {
        g.mv(b.element, "ytp-ce-element-hover");
        g.mv(b.element, "ytp-ce-force-expand"); k4(a, c.id, !1)
    }, k4 = function (a, b, c) {
        a.B && (c ? a.D.show() : a.D.hide());
        for (var d = g.u(Object.keys(a.j)), e = d.next(); !e.done; e = d.next())e = e.value, e !== b && g.ov(a.j[e].element, "ytp-ce-element-shadow-show", c)
    }, l4 = function (a, b, c) {
        function d() { f || (e++, e === b.length && (h.stop(), c && c())) }
        if (!b || 0 === b.length || g4(a)) c && c(); else {
            b = Plb(a, b); var e = 0, f = !1, h = new g.cv(function () { f = !0; c && c() }, 1E3, a);
            h.start(); for (a = 0; a < b.length; a++)g.LE(b[a], d)
        }
    }, Olb = function (a, b, c) {
        l4(a, b.clickUrls, c);
        (a = g.SF()) && b.W7 && g.rG(a, b.visualElement)
    }, Plb = function (a, b) {
        var c = a.player.getVideoData().clientPlaybackNonce;
        a = a.player.getCurrentTime().toFixed(2); c = { CPN: c, AD_CPN: c, MT: a }; a = []; for (var d = 0; d < b.length; d++)a.push(Qlb(b[d], c)); return a
    }, Qlb = function (a, b) {
        return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function (c) {
            var d = unescape(c);
            d = d.substring(1, d.length - 1); return b[d] ? escape(b[d]) : c
        })
    }, Rlb = function (a) { return "string" === typeof a ? a : "" }, m4 = function (a, b, c) {
        for (var d in b) if (b[d] === a) return a;
        return c
    }, Slb = function (a, b, c, d) {
        this.value = a;
        this.target = b; this.showLinkIcon = c; this.j = d
    }, n4 = function (a) { return a.value ? a.value : null }, o4 = function (a) {
        if (!a) return null;
        var b = g.lo(Rlb(a.value)); b = g.ke(b); if (!b) return null; var c = m4(a.target, Tlb, "current"); if (null == c) a = null; else { var d = a.show_link_icon; a = new Slb(b, c, "true" === d || "false" === d ? "true" === d : !0, null != a.pause_on_navigation ? a.pause_on_navigation : !0) } return a
    }, Ulb = function (a, b, c) {
        this.type = a;
        this.trigger = b; this.url = c
    }, Xlb = function (a) {
        if (!a) return null;
        var b = m4(a.type, Vlb), c = m4(a.trigger, Wlb); a = a.url; a = Array.isArray(a) && a.length ? a[0] : a; a = o4(a ? a : null); return b ? new Ulb(b, c, a) : null
    }, Ylb = function (a, b, c, d, e) {
        this.id = a;
        this.type = b; this.style = c; this.data = e; this.action = d || []
    }, Zlb = function (a, b) { return g.Eb(a.action, b) }, $lb = function (a, b) {
        this.context = a;
        this.j = b
    }, amb = function (a) { return a.customMessage ? p4("div", "iv-card-message", a.customMessage) : "" }, q4 = function (a, b) {
        a = "background-Image: url(" + a + ");";
        var c = []; b && c.push(b); return { I: "div", S: "iv-card-Image", Y: { style: a }, V: c }
    }, bmb = function (a) {
        if (!a.metaInfo || 0 === a.metaInfo.length) return "";
        var b = []; a = g.u(a.metaInfo); for (var c = a.next(); !c.done; c = a.next())b.push(p4("li", "", c.value)); return { I: "ul", S: "iv-card-meta-info", V: b }
    }, p4 = function (a, b, c) {
        b ? "string" === typeof b ? b = { "class": b } : Array.isArray(b) && (b = { "class": b.join(" ") }) : b = {};
        b.dir = g.Cv(c); return { I: a, Y: b, ya: c }
    }, cmb = function (a) {
        if (!a.customMessage) return "";
        var b = ["iv-card-action", "iv-card-primary-link"], c = {}; a.BC && (b.push("iv-card-action-icon"), c.style = "background-Image: url(" + a.BC + ");"); c.dir = g.Cv(a.customMessage); var d = [{ I: "span", ya: a.customMessage }]; a.showLinkIcon && (d.push("\u00a0"), d.push({ I: "span", S: "iv-card-link-icon" })); return { I: "div", Ma: b, Y: c, V: d }
    }, r4 = function (a, b, c, d) {
        if (d) {
            b = g.u(b);
            for (var e = b.next(); !e.done; e = b.next())a.j(e.value, d, c.id, c.sessionData, c.hj.click, 5)
        }
    }, dmb = function (a, b) {
        this.merchant = a;
        this.price = b
    }, emb = function (a) {
        var b;
        (b = a) && !(b = 1 < a.length ? "/" === a.charAt(0) && "/" !== a.charAt(1) : "/" === a) && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || 1 > b.length || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = "com" === b[0] && "youtube" === b[1] || "be" === b[0] && "youtu" === b[1]); return b ? -1 === a.indexOf("/redirect?") : !1
    }, fmb = function (a, b) { return b ? b : emb(a) ? "current" : "new" }, s4 = function (a, b) {
        g.I.call(this);
        var c = this; this.element = a; this.context = b; this.qb = !1; this.Xa = new Map; this.Za = new Map; this.context.J.addEventListener(g.vK("annotations_module"), function (d) { (d = c.Xa.get(d)) && d.apply(c) });
        this.context.J.addEventListener(g.wK("annotations_module"), function (d) { (d = c.Za.get(d)) && d.apply(c) })
    }, t4 = function (a, b, c, d, e, f, h) {
        a.context.j.Ra(b, "click", function (l) { a.qL(c, d, e, f || [], h || 0, l) });
        a.context.j.Ra(b, "touchstart", function () { a.qb = !1 });
        a.context.j.Ra(b, "touchmove", function () { a.qb = !0 })
    }, gmb = function (a) {
        var b;
        return (null == (b = g.U(a, g.RG)) ? 0 : b.url) ? g.U(a, g.RG).url : (a = g.U(a, g.CT)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
    }, u4 = function (a, b, c) {
        return {
            rX: (a.impressionLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" }),
            click: (c.loggingUrls || []).map(function (d) { return d.baseUrl || "" }),
            close: (b.dismissLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" }),
            O_: (b.impressionLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" }),
            GK: (b.clickLoggingUrlsV2s || []).map(function (d) { return d.baseUrl || "" })
        }
    }, hmb = function (a, b, c) {
        s4.call(this, b, c);
        var d = this; this.J = a; this.eventId = null; this.Db = this.Na = this.Rb = this.C = this.isInitialized = !1; this.cards = []; this.ub = this.Z = this.Ka = this.G = this.Ua = this.j = null; this.ma = []; this.ra = this.N = this.Gf = this.Ga = null; this.K = 0; this.Ea = new g.cv(function () { }, c.X.wl ? 4E3 : 3E3);
        g.M(this, this.Ea); this.jb = new g.cv(function () { });
        g.M(this, this.jb); this.Ba = new $lb(c, function (e, f, h, l, m, n) { t4(d, e, f, h, l, m, n) });
        this.W = new g.V({ I: "div", S: "iv-drawer", Y: { id: "iv-drawer" }, V: [{ I: "div", S: "iv-drawer-header", Y: { "aria-role": "heading" }, V: [{ I: "span", S: "iv-drawer-header-text" }, { I: "button", Ma: ["iv-drawer-close-button", "ytp-button"], Y: { "aria-label": "Hide cards", tabindex: "0" } }] }, { I: "div", S: "iv-drawer-content" }] }); g.M(this, this.W); this.D = this.W.element; this.bb = new g.dH(this.W, 330); g.M(this, this.bb); this.Jb = g.df("iv-drawer-header-text", this.D); this.B = g.df("iv-drawer-content", this.D); this.addCueRange(0, 1E3 * c.videoData.lengthSeconds,
            "", function () { d.Rb && v4(d, "YOUTUBE_DRAWER_AUTO_OPEN") }, function () { (d.Rb = d.C) && w4(d) });
        this.Ta = new g.hL(this); g.M(this, this.Ta); this.J.addEventListener("videodatachange", this.Rs.bind(this))
    }, imb = function (a, b) {
        b = b.data;
        b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function () { v4(a, "YOUTUBE_DRAWER_AUTO_OPEN") });
        b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function () { w4(a) });
        var c = b.headerText; g.Ef(a.Jb, c); a.Z && a.Z.setAttribute("title", c); b.eventId && (a.eventId = b.eventId); a.Ga = g.QF(b.trackingParams); a.N = g.QF(b.closeTrackingParams); a.Gf = g.QF(b.iconTrackingParams)
    }, jmb = function (a, b) {
        var c = b.cardId ? b.cardId : "cr:" + a.K, d = a.J.U().experiments.kb("enable_error_corrections_infocard_web_client");
        if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
            var e = b.teaser.simpleCardTeaserRenderer, f = b.icon ? b.icon.infoCardIconRenderer : null; b = {
                id: c, timestamp: a.K, type: "simple", teaserText: g.FG(e.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, sessionData: {}, sponsored: !1, hj: {}, Yo: null, Lj: e.trackingParams ? g.QF(e.trackingParams) : null, Gf: f && f.trackingParams ? g.QF(f.trackingParams) : null, ImageUrl: "", displayDomain: null, showLinkIcon: !1,
                BC: null, title: "", customMessage: "", url: null, onClickCommand: e.onTapCommand || null
            }; x4(a, b)
        } else {
            var h; if (null == (h = b.content) ? 0 : h.simpleCardContentRenderer) {
                if (!b.cueRanges.length) return; f = null == (e = b.content) ? void 0 : e.simpleCardContentRenderer; e = b.teaser.simpleCardTeaserRenderer; var l = b.icon ? b.icon.infoCardIconRenderer : null; b = {
                    id: c, timestamp: a.K, type: "simple", teaserText: g.FG(e.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen,
                    sessionData: y4(a, c, b, f), sponsored: !1, hj: u4(f, e, f.command), Yo: f.trackingParams ? g.QF(f.trackingParams) : null, Lj: e.trackingParams ? g.QF(e.trackingParams) : null, Gf: l && l.trackingParams ? g.QF(l.trackingParams) : null, ImageUrl: z4(f.Image.thumbnails, 290).url, displayDomain: f.displayDomain ? g.FG(f.displayDomain) : null, showLinkIcon: !!f.showLinkIcon, BC: null, title: f.title ? g.FG(f.title) : "", customMessage: f.callToAction ? g.FG(f.callToAction) : "", url: g.U(f.command, g.RG).url ? o4({
                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                        target: "new", value: g.U(f.command, g.RG).url
                    }) : null, onClickCommand: null
                }; x4(a, b)
            } else {
                var m; if (null == (m = b.content) ? 0 : m.collaboratorInfoCardContentRenderer) {
                    if (!b.cueRanges.length) return; e = null == (f = b.content) ? void 0 : f.collaboratorInfoCardContentRenderer; f = b.teaser.simpleCardTeaserRenderer; l = b.icon ? b.icon.infoCardIconRenderer : null; b = {
                        id: c, timestamp: a.K, type: "collaborator", teaserText: g.FG(f.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs), startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen, sessionData: y4(a, c, b, e), sponsored: !1, hj: u4(e, f, e.endpoint), Yo: e.trackingParams ? g.QF(e.trackingParams) : null, Lj: f.trackingParams ? g.QF(f.trackingParams) : null, Gf: l && l.trackingParams ? g.QF(l.trackingParams) : null, channelId: g.U(e.endpoint, g.RT).browseId, customMessage: e.customText ? g.FG(e.customText) : null, profileImageUrl: z4(e.channelAvatar.thumbnails, 290).url, title: e.channelName ? g.FG(e.channelName) : "", metaInfo: [e.subscriberCountText ? g.FG(e.subscriberCountText) : ""], url: o4({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new", value: g.U(e.endpoint, g.RT).canonicalBaseUrl ? g.U(e.endpoint, g.RT).canonicalBaseUrl : "/channel/" + g.U(e.endpoint, g.RT).browseId
                        }), onClickCommand: null
                    }; x4(a, b)
                } else {
                    var n; if (null == (n = b.content) ? 0 : n.playlistInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return; e = null == (l = b.content) ? void 0 : l.playlistInfoCardContentRenderer; f = b.teaser.simpleCardTeaserRenderer; l = b.icon ? b.icon.infoCardIconRenderer : null; b = {
                            id: c, timestamp: a.K, type: "playlist", teaserText: g.FG(f.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, sessionData: y4(a, c, b, e), sponsored: !1, hj: u4(e, f, e.action), Yo: e.trackingParams ? g.QF(e.trackingParams) : null, Lj: f.trackingParams ? g.QF(f.trackingParams) : null, Gf: l && l.trackingParams ? g.QF(l.trackingParams) : null, PF: z4(e.playlistThumbnail.thumbnails, 258).url, customMessage: e.customMessage ? g.FG(e.customMessage) : null, playlistVideoCount: g.FG(e.playlistVideoCount), title: e.playlistTitle ? g.FG(e.playlistTitle) : "", metaInfo: [e.channelName ? g.FG(e.channelName) :
                                "", e.videoCountText ? g.FG(e.videoCountText) : ""], url: o4({ pause_on_navigation: !a.context.videoData.isLivePlayback, target: "new", value: gmb(e.action) }), onClickCommand: null
                        }; x4(a, b)
                    } else {
                        var p; if (null == (p = b.content) ? 0 : p.videoInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return; var q; e = null == (q = b.content) ? void 0 : q.videoInfoCardContentRenderer; f = b.teaser.simpleCardTeaserRenderer; l = b.icon ? b.icon.infoCardIconRenderer : null; b = {
                                id: c, timestamp: a.K, type: "video", teaserText: g.FG(f.message), teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs), autoOpen: !!b.autoOpen, sessionData: y4(a, c, b, e), sponsored: !1, hj: u4(e, f, e.action), Yo: e.trackingParams ? g.QF(e.trackingParams) : null, Lj: f.trackingParams ? g.QF(f.trackingParams) : null, Gf: l && l.trackingParams ? g.QF(l.trackingParams) : null, PF: z4(e.videoThumbnail.thumbnails, 258).url, videoDuration: e.lengthString ? g.FG(e.lengthString) : null, customMessage: e.customMessage ? g.FG(e.customMessage) : null, title: e.videoTitle ? g.FG(e.videoTitle) : "", metaInfo: [e.channelName ? g.FG(e.channelName) :
                                    "", e.viewCountText ? g.FG(e.viewCountText) : ""], isLiveNow: !!e.badge, url: o4({ pause_on_navigation: !a.context.videoData.isLivePlayback, target: "new", value: gmb(e.action) }), onClickCommand: null
                            }; x4(a, b)
                        }
                    }
                }
            }
        } a.K++
    }, z4 = function (a, b) {
        for (var c = -1, d = -1, e = 0; e < a.length; e++) {
            if (a[e].height === b || 290 === a[e].width) return a[e];
            ((a[e].height || 0) < b || 290 > (a[e].width || 0)) && (0 > c || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e : ((a[e].height || 0) >= b || 290 <= (a[e].width || 0)) && (0 > d || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
        } return a[0 <= d ? d : c]
    }, y4 = function (a, b, c, d) {
        return {
            feature: c.feature ? c.feature : "cards",
            src_vid: a.context.videoData.videoId, annotation_id: b, ei: a.context.videoData.eventId || "", itct: d.trackingParams || ""
        }
    }, lmb = function (a, b) { if (b = kmb(a, b)) b === a.j && (a.j = null), a.J.removeCueRange(b.dg.id), g.yf(b.GM), g.Jb(a.cards, b), a.NG(), A4(a) }, v4 = function (a, b, c) {
        if (!a.C) {
            a.bb.show();
            a.Ua = new g.cv(function () { g.kv(a.context.J.getRootNode(), g.nZ.IV_DRAWER_OPEN) }, 0);
            a.Ua.start(); a.Ta.T(a.B, "mousewheel", function (h) { a.Ea.start(); h.preventDefault(); h = h || window.event; var l = 0; "MozMousePixelScroll" == h.type ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = 0 == h.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3; if (h = l) a.B.scrollTop += h });
            a.C = !0; var d = g.SF(); d && a.Ga && a.N && g.pG(d, [a.Ga, a.N]); b = { TRIGGER_TYPE: b }; for (var e = g.u(a.cards), f = e.next(); !f.done; f = e.next())f = f.value, f.eY || (f.eY = !0, mmb(a.context.logger, f.dg.hj.rX, b)), d && g.pG(d, [f.dg.Yo]); Y3(a.J); c && (a.G = new g.cv(function () { a.Ka = a.Z; a.ub.focus() }, 330), a.G.start())
        }
    }, w4 = function (a) { a.C && (a.bb.hide(), g.gD(a.Ta), g.mv(a.context.J.getRootNode(), g.nZ.IV_DRAWER_OPEN), a.C = !1, Y3(a.J), a.G && a.G.stop(), a.G = new g.cv(function () { a.Ka && (a.Ka.focus(), a.Ka = null) }, 330), a.G.start()) }, omb = function (a) {
        g.lv(a.Kb(),
            [g.nZ.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"]); g.KU(a.J, a.D, 5); nmb(a); a.Z = g.df("ytp-cards-button", a.J.getRootNode()); a.ub = g.df("iv-drawer-close-button", a.D); a.isInitialized = !0
    }, nmb = function (a) {
        var b = g.df("iv-drawer-close-button", a.D);
        a.context.j.Ra(b, "click", a.u5, a); a.context.j.Ra(a.B, "touchend", function () { a.Ea.start() });
        a.context.j.Ra(a.B, "scroll", a.Q5, a); a.context.B.subscribe("onHideControls", function () { a.Na = !0 });
        a.context.B.subscribe("onShowControls", function () { a.Na = !1 });
        a.context.B.subscribe("onVideoAreaChange", function () { a.Na = g.jv(a.J.getRootNode(), "ytp-autohide") });
        a.ma.push(g.ZE("iv-button-shown", a.p8, a)); a.ma.push(g.ZE("iv-button-hidden", a.o8, a)); pmb(a)
    }, pmb = function (a) {
        a.ma.push(g.ZE("iv-teaser-shown", a.I1, a));
        a.ma.push(g.ZE("iv-teaser-hidden", a.q8, a)); a.ma.push(g.ZE("iv-teaser-clicked", a.H1, a)); a.Db = !0
    }, qmb = function (a, b) {
        var c;
        return b.onClickCommand && "engagement-panel-error-corrections" === (null == (c = g.U(b.onClickCommand, g.Phb)) ? void 0 : c.targetId) ? (a.ra = b, !0) : !1
    }, rmb = function (a, b) {
        a.ra = b;
        var c = a.J.getVideoData(); if (!c) return !1; c = g.nRa(c); if (null == c ? 0 : c.markersMap) for (var d, e = 0; (null == (d = c) ? void 0 : d.markersMap.length) > e; e++) { var f = void 0, h = null == (f = c) ? void 0 : f.markersMap[e]; if ("ERROR_CORRECTION_MARKERS" === h.key && (f = void 0, (h = null == (f = h.value) ? void 0 : f.markers) && 0 < h.length)) return d = void 0, b.startMs = (null == (d = g.U(h[0], g.w_a)) ? void 0 : d.timeRangeStartMillis) || 0, a.ra = null, !0 } return !1
    }, x4 = function (a, b) {
        if (!qmb(a, b) || rmb(a, b)) {
            var c = smb(a, b);
            if (c) {
                var d = { dg: b, GM: c.element, eY: !1 }; if (b.onClickCommand) a.J.L("web_infocards_teaser_show_logging_fix") && (a.Db || pmb(a), lmb(a, b.id), c = a.findLastIndex(d), g.Sb(a.cards, c, 0, d)); else { a.isInitialized || omb(a); lmb(a, b.id); var e = a.findLastIndex(d); g.Sb(a.cards, e, 0, d); c.Ja(a.B, e); a.NG() } b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function () { a.C || (a.j = d, A4(a), tmb(a, d), v4(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1)) }) : (c = 1E3 * a.context.J.getCurrentTime(), 5E3 > c && c > b.startMs && umb(a, d), a.addCueRange(b.startMs,
                    b.startMs + 1, b.id, function () { umb(a, d) }), A4(a))
            }
        }
    }, smb = function (a, b) {
        switch (b.type) {
            case "simple": a = a.Ba;
                var c = b.displayDomain ? { I: "div", S: "iv-card-Image-text", ya: b.displayDomain } : void 0; var d = cmb(b); c = { I: "div", Ma: ["iv-card"], V: [{ I: "a", S: "iv-click-target", Y: { href: b.url ? n4(b.url) || "" : "" }, V: [q4(b.ImageUrl, c), { I: "div", S: "iv-card-content", V: [p4("h2", void 0, b.title), d] }] }] }; c = new g.V(c); r4(a, g.cf("iv-click-target", c.element), b, b.url); b = c; break; case "collaborator": a = a.Ba; c = {
                    I: "div", Ma: ["iv-card", "iv-card-channel"], V: [{
                        I: "a", Ma: ["iv-click-target"], Y: { href: n4(b.url) || "", "data-ytid": b.channelId }, V: [q4(b.profileImageUrl),
                        { I: "div", S: "iv-card-content", V: [amb(b), { I: "h2", S: "iv-card-primary-link", ya: b.title }, bmb(b)] }]
                    }]
                }; c = new g.V(c); r4(a, g.cf("iv-click-target", c.element), b, b.url); b = c; break; case "playlist": a = a.Ba; c = { I: "div", Ma: ["iv-card", "iv-card-playlist"], V: [{ I: "a", S: "iv-click-target", Y: { href: n4(b.url) || "" }, V: [q4(b.PF, { I: "div", S: "iv-card-Image-overlay", V: [{ I: "span", S: "iv-card-playlist-video-count", ya: b.playlistVideoCount }] }), { I: "div", S: "iv-card-content", V: [amb(b), p4("h2", "iv-card-primary-link", b.title), bmb(b)] }] }] };
                c = new g.V(c); r4(a, g.cf("iv-click-target", c.element), b, b.url); b = c; break; case "productListing": a = a.Ba; var e = 0 != b.offers.length; c = ["iv-card"]; d = ""; var f = cmb(b); e && (c.push("iv-card-product-listing"), d = "iv-card-primary-link", f = b.offers[0], e = [], f.price && e.push({ I: "div", S: "iv-card-offer-price", ya: f.price }), f.merchant && e.push({ I: "div", S: "iv-card-offer-merchant", ya: f.merchant }), f = { I: "div", V: e }); e = b.url ? n4(b.url) || "" : ""; c = {
                    I: "div", Ma: c, Y: { tabindex: "0" }, V: [{
                        I: "a", Ma: ["iv-card-Image", "iv-click-target"], Y: {
                            style: "background-Image: url(" +
                                b.ImageUrl + ");", href: e, "aria-hidden": "true", tabindex: "-1"
                        }
                    }, { I: "div", S: "iv-card-content", V: [b.sponsored ? { I: "div", S: "iv-card-sponsored", V: ["Sponsored", { I: "div", S: "iv-ad-info-container", V: [{ I: "div", S: "iv-ad-info", ya: "{{adInfo}}" }, { I: "div", S: "iv-ad-info-icon-container", V: [{ I: "div", S: "iv-ad-info-icon" }, { I: "div", S: "iv-ad-info-callout" }] }] }] } : "", { I: "a", S: "iv-click-target", Y: { href: e }, V: [p4("h2", d, b.title), f] }] }]
                }; c = new g.V(c); d = g.tf("span"); g.Ef(d, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                c.Zd(d, "adInfo"); r4(a, g.cf("iv-click-target", c.element), b, b.url); b = c; break; case "video": a = a.Ba; d = b.videoDuration ? { I: "span", S: "iv-card-video-duration", ya: b.videoDuration } : void 0; f = b.isLiveNow ? { I: "span", Ma: ["yt-badge", "yt-badge-live"], ya: "LIVE NOW" } : null; e = { I: "div", Ma: ["iv-card", "iv-card-video"], V: [{ I: "a", S: "iv-click-target", Y: { href: (null == (c = b.url) ? void 0 : n4(c)) || "" }, V: [q4(b.PF, d), { I: "div", S: "iv-card-content", V: [amb(b), p4("h2", "iv-card-primary-link", b.title), bmb(b), f] }] }] }; c = new g.V(e); r4(a, g.cf("iv-click-target",
                    c.element), b, b.url); b = c; break; default: return null
        }return b
    }, vmb = function (a) {
        if (a.j) return "productListing" === a.j.dg.type;
        if (a.J.L("enable_wn_infocards")) { var b; return !(null == (b = a.cards) || !b.length) && g.Mr(a.cards, function (c) { return "productListing" === c.dg.type }) } return g.Mr(a.cards, function (c) { return "productListing" === c.dg.type })
    }, A4 = function (a) { g.ov(a.J.getRootNode(), "ytp-cards-shopping-active", vmb(a)) }, umb = function (a, b) {
        if (!g.jv(a.J.getRootNode(), "ytp-cards-teaser-shown")) {
            if (a.j !== b) {
                var c = g.SF(), d = a.j ? a.j.dg.Gf : a.Gf;
                c && d && g.qG(c, [d]); a.j = b; A4(a)
            } (c = a.isInitialized && "none" == a.Kb().style.display) || (c = a.context.J.getPlayerState(), d = 0 === c && 0 === a.context.J.getCurrentTime(), c = !(1 === c || 3 === c || d)); c || b.dg.teaserDurationMs && a.J.WA(!0, { teaserText: b.dg.teaserText, durationMs: b.dg.teaserDurationMs, onClickCommand: b.dg.onClickCommand }); a.jb.isActive() || ((!a.C || !a.Ea.isActive() && a.Na) && tmb(a, b), a.jb.start(910 + b.dg.teaserDurationMs))
        }
    }, tmb = function (a, b) {
        a.W.Ib ? (b = new c4([0,
            a.B.scrollTop], [0, b.GM.offsetTop], 600, Alb), a.context.C.Ra(b, "animate", function (c) { a.B.scrollTop = c.y }), a.context.C.Ra(b, "finish", function (c) { a.B.scrollTop = c.y }), b.play()) : (g.BG(a.W, !0), a.B.scrollTop = b.GM.offsetTop, g.BG(a.W, !1))
    }, B4 = function (a) { return a.j && a.j.dg ? a.j.dg : a.cards[0] && a.cards[0].dg ? a.cards[0].dg : null }, kmb = function (a, b) { return g.Eb(a.cards, function (c) { return c.dg.id === b }) }, C4 = function (a, b, c) {
        s4.call(this, a, b);
        this.annotation = c; this.isActive = !1
    }, wmb = function (a) {
        var b = a.annotation.data;
        "start_ms" in b && "end_ms" in b && a.addCueRange(b.start_ms, b.end_ms, a.annotation.id, function () { a.show() }, function () { a.hide() })
    }, D4 = function (a, b, c) {
        C4.call(this, a, b, c);
        this.B = null; this.N = !1; this.C = null; this.D = !1; this.j = this.K = this.G = null
    }, xmb = function (a, b) {
        var c = void 0 === c ? 0 : c;
        var d = rlb(b).width; g.ys(b, d); c = new ylb(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, zlb); g.M(a, c); a.context.C.Ra(c, "begin", function () { g.Es(b, !0) });
        c.play()
    }, Amb = function (a, b) {
        if (b.channel_name) {
            var c = a.createElement({
                I: "div",
                Ma: ["iv-branding-context-name"], ya: b.channel_name
            }), d = a.createElement({ I: "div", Ma: ["iv-branding-context-subscribe"] }), e = b.standalone_subscribe_button_data; e && (a.j = new g.FW(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, a.context.J, !1), a.j.Ja(d)); var f = a.createElement({ I: "div", Ma: ["iv-branding-context-subscribe-caret"] }), h = a.createElement({ I: "div", Ma: ["branding-context-container-inner"] }); h.appendChild(f);
            h.appendChild(c); h.appendChild(d); g.Es(h, !1); var l = a.createElement({ I: "div", Ma: ["branding-context-container-outer"] }); l.appendChild(h); g.rs(l, "right", b.Image_width + "px"); g.vf(a.Kb(), l); a.C = new g.cv(function () { ymb(a, h, l) }, 500);
            g.M(a, a.C); a.context.j.Ra(a.Kb(), "mouseover", function () { zmb(a, h, l, f, b.Image_height) });
            a.context.j.Ra(a.Kb(), "mouseout", function () { a.C.start() })
        }
    }, zmb = function (a, b, c, d, e) {
        a.C.stop();
        if (!a.D) {
            var f = g.Ds(b); a.j || (b.style.width = g.xs(f.width, !0), c.style.width = g.xs(f.width, !0)); g.rs(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px"); g.rs(d, "right", "1px"); a.D = !0; g.Es(b, !0); a.G = new g.cv(function () { g.kv(this.Kb(), "iv-branding-active") }, 0, a);
            a.G.start()
        }
    }, ymb = function (a, b, c) {
        g.mv(a.Kb(), "iv-branding-active");
        a.K = new g.cv(function () { g.Es(b, !1); a.j || (c.style.width = g.xs(0, !0)) }, 250);
        a.K.start(); a.D = !1
    }, Bmb = function (a, b, c, d, e, f, h) {
        this.j = a;
        this.C = b; this.X = c; this.videoData = d; this.logger = e; this.J = f; this.B = h
    }, Cmb = function (a, b, c) {
        C4.call(this, a, b, c);
        var d = this; this.Z = this.isCollapsed = this.W = !1; this.K = 5E3; this.B = this.C = this.j = this.D = null; this.N = this.createElement({ I: "div", Ma: ["iv-promo-contents"] }); this.G = new g.cv(function () { d.j.setAttribute("aria-hidden", "true"); g.Es(d.C, !1); g.Es(d.B, !0) }, 700, this);
        g.M(this, this.G)
    }, Fmb = function (a, b, c) {
        c.stopPropagation();
        Dmb(a); Emb(a, b); a.j.focus()
    }, Gmb = function (a) { a.isCollapsed || a.Z || a.D || (g.kv(a.Kb(), "iv-promo-collapsed"), a.isCollapsed = !0, a.G.start()) }, Dmb = function (a) {
        a.G.stop();
        a.isCollapsed && (g.nv(a.Kb(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.Es(a.B, !1), g.Es(a.C, !0))
    }, Emb = function (a, b) {
        a.D || (a.D = g.fg(function () {
            Hmb(this);
            Gmb(this)
        }, b, a))
    }, Hmb = function (a) { a.D && (g.Sa.clearTimeout(a.D), a.D = null) }, Imb = function (a) { this.J = a }, mmb = function (a, b, c) { b && (c ? E4(a, b.map(function (d) { return g.Mu(d, c) })) : E4(a, b)) }, E4 = function (a, b, c, d) {
        var e = 1, f = void 0, h = -1;
        if (c) {
            var l = !1; f = function () { e--; e || l || (clearTimeout(h), l = !0, c()) };
            h = setTimeout(function () { l = !0; c() }, 1E3)
        } b = g.u(b || []);
        for (var m = b.next(); !m.done; m = b.next())m = m.value, e++, g.LE(m, f); d && (e++, 0 !== d && a.J.sendVideoStatsEngageEvent(d, f))
    }, Jmb = function (a) {
        g.YV.call(this, a);
        var b = this; this.ma = this.Z = !1; this.loadNumber = 0; this.N = {}; this.logger = new Imb(this.player); this.D = new g.hL(this); this.G = this.K = null; this.events = new g.hL(this); this.Sg = this.W = this.j = null; this.ra = []; g.M(this, this.D); this.D.T(this.player, "onVideoAreaChange", function () { b.oa("onVideoAreaChange") });
        this.D.T(this.player, "onHideControls", function () { b.oa("onHideControls") });
        this.D.T(this.player, "onShowControls", function () { b.oa("onShowControls") });
        this.D.T(this.player, "resize", function (d) { b.oa("resize", d) });
        this.D.T(this.player, "presentingplayerstatechange", function (d) { b.oa("presentingplayerstatechange", d) });
        this.subscribe("presentingplayerstatechange", this.J1, this); this.subscribe("resize", this.uJ, this); this.player.U().Na.subscribe("vast_info_card_add", this.lZ, this); g.M(this, this.events); this.Ba = this.createElement({ I: "div", S: "video-custom-annotations" }); this.B = new g.V({ I: "div", Ma: ["ytp-player-content", "ytp-iv-player-content"] }); g.M(this, this.B); g.KU(this.player, this.B.element, 4); this.B.hide(); this.C = new g.V({ I: "div", Ma: ["ytp-iv-video-content"] }); g.M(this, this.C); a = this.createElement({ I: "div", S: "video-annotations" });
        a.appendChild(this.Ba); this.C.element.appendChild(a); this.Ut() && this.load(); var c = this.createElement({ I: "style" }); (g.Ze("HEAD")[0] || document.body).appendChild(c); this.addOnDisposeCallback(function () { g.yf(c) });
        if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
            0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                    0), a.insertRule(".iv-card-link-icon {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                        0), a.insertRule(".iv-drawer-close-button:after {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                            0), a.insertRule(".annotation-close-button {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:Image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                                0)
    }, Kmb = function (a) {
        a = a.createElement({
            I: "div",
            Ma: ["annotation", "annotation-type-custom"]
        }); g.Es(a, !1); return a
    }, Lmb = function (a, b) {
        b = !b.isCued() && !g.kH(b, 1024);
        g.BG(a.B, b); g.BG(a.C, b)
    }, Mmb = function (a, b, c) {
        a.Z = !0;
        a.G = g.sC(b, c)
    }, Nmb = function (a, b) {
        for (var c = {}, d = g.u(b.attributes), e = d.next(); !e.done; e = d.next())e = e.value, c[e.name] = e.nodeValue;
        for (d = 0; d < b.childNodes.length; d++)if (e = b.childNodes[d], g.cb(e) && 1 == e.nodeType) { if (c[e.tagName]) var f = c[e.tagName]; else if ("data" === e.tagName) { 0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" === typeof f ? f.trim() : f); continue } else f = [], c[e.tagName] = f; e && "TEXT" === e.tagName ? 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(Nmb(a, e)) } return c
    }, Rmb = function (a) {
        var b = a.player.getVideoData();
        if (b.Xa) {
            var c = a.player.U().Na.get(b.videoId); if (c) {
                var d = { format: "XML", urlParams: {}, method: "POST", withCredentials: !0, onFinish: function (e, f, h) { e = a.loadNumber; f = b.videoId; a.loaded && a.loadNumber === e && a.player.getVideoData().videoId === f && (h = g.mC(h) && h.responseXML ? h.responseXML : null) && Omb(a, h) } };
                g.zD() && (d.onFinish = Pmb(a, d.onFinish)); d.postParams = { ic_only: "1" }; Qmb(d, c); a.Z = !0; g.sC(b.Xa, d)
            }
        }
    }, Qmb = function (a, b) {
        a.method = "POST";
        a.postParams = a.postParams || {}; b.TG && (a.postParams.ic_coll = b.TG); b.HM && (a.postParams.ic_xml = b.HM); b.LK && (a.postParams.ic_track = b.LK)
    }, Smb = function (a) {
        var b = new g.V({ I: "div" });
        g.Es(b.element, !1); var c = new hmb(a.player, b.element, F4(a)); g.M(c, b); b.Ja(a.B.element); c.CF(); return c
    }, Umb = function (a, b) {
        var c, d;
        if (b = null == (c = b.getWatchNextResponse()) ? void 0 : null == (d = c.cards) ? void 0 : d.cardCollectionRenderer) a.ma = !0, Tmb(a, b), b.headerText && a.Sg && (c = g.FG(b.headerText), a.Sg.setAttribute("title", c))
    }, F4 = function (a) {
        if (!a.W) {
            var b = new Blb(a);
            g.M(a, b); var c = new g.Mp(a); g.M(a, c); a.W = new Bmb(b, c, a.player.U(), a.player.getVideoData(), a.logger, a.player, a.wj)
        } return a.W
    }, Omb = function (a, b) {
        var c = !1, d = b.getElementsByTagName("annotations");
        if (d && !(1 > d.length) && (d = d[0].getAttribute("itct"))) { var e = g.SF(); if (e) { var f = g.RF(); f && g.aC(g.Ava)(void 0, e, f, [g.QF(d)]) } } b = b.getElementsByTagName("annotation"); for (d = 0; d < b.length; d++) {
            f = Nmb(a, b[d]); e = null; try {
                if (f) {
                    var h = f.id, l = /.+/; var m = "string" === typeof h && null != l && null != h && h.match(l) ? h : ""; var n = m4(f.type, Vmb), p = m4(f.style, Wmb), q = Rlb(f.data), r = 0 !== q.length ? JSON.parse(q) : {}; var t = f.action; f = Xlb; if (null == t) var v = null; else if (g.bb(t)) {
                        l = []; for (var x = g.u(t), B = x.next(); !B.done; B = x.next()) {
                            var E = f(B.value);
                            E && l.push(E)
                        } v = l
                    } else { var F = f(t); v = F ? [F] : [] } e = m && n ? new Ylb(m, n, p, v, r) : null
                } else e = null
            } catch (wa) { } if (e) if ("branding" === e.type || "promotion" === e.type) { f = a; l = e; var G = Kmb(f), P = null; switch (l.type) { case "branding": if (f.player.U().ze) break; f.B.element.appendChild(G); P = new D4(G, F4(f), l); break; case "promotion": g.KU(f.player, G, 4), P = new Cmb(G, F4(f), l) }P && P.CF(); if (f = P) g.M(a, f), a.N[e.id] = f } else if ("card" === e.type || "drawer" === e.type) {
                a.j || (a.j = Smb(a), g.M(a, a.j)); if ("card" === e.type) {
                    G = a.j; var Q = (c = e) && c.data &&
                        c.data.card_type; e = c.data; if (Q) switch (f = e.tracking || {}, f = { rX: f.impression, click: f.click, close: f.close, O_: f.teaser_impression, GK: f.teaser_click }, l = e.tracking_params || {}, P = null, Q) {
                            case "collaborator": c = {
                                id: c.id, timestamp: e.timestamp || 0, type: e.card_type, teaserText: e.teaser_text, teaserDurationMs: e.teaser_duration_ms, startMs: e.start_ms, autoOpen: e.auto_open || !1, sessionData: e.session_data || {}, sponsored: e.sponsored || !1, hj: f, Yo: l.card ? g.QF(l.card) : null, Lj: l.teaser ? g.QF(l.teaser) : null, Gf: l.icon ? g.QF(l.icon) :
                                    null, channelId: e.channel_id, customMessage: e.custom_message ? e.custom_message : null, profileImageUrl: e.Image_url, title: e.title, metaInfo: e.meta_info, url: o4({ pause_on_navigation: e.pause_on_navigation, target: e.target || "new", value: e.url }), onClickCommand: null
                            }; x4(G, c); break; case "playlist": c = {
                                id: c.id, timestamp: e.timestamp || 0, type: e.card_type, teaserText: e.teaser_text, teaserDurationMs: e.teaser_duration_ms, startMs: e.start_ms, autoOpen: e.auto_open || !1, sessionData: e.session_data || {}, sponsored: e.sponsored || !1, hj: f,
                                Yo: l.card ? g.QF(l.card) : null, Lj: l.teaser ? g.QF(l.teaser) : null, Gf: l.icon ? g.QF(l.icon) : null, PF: e.Image_url, playlistVideoCount: e.playlist_video_count, customMessage: e.custom_message ? e.custom_message : null, title: e.title, metaInfo: e.meta_info, url: o4({ pause_on_navigation: e.pause_on_navigation, target: e.target || "new", value: e.url }), onClickCommand: null
                            }; x4(G, c); break; case "productListing": e.signin_url && (P = o4({ target: "current", value: e.signin_url })); Q = []; for (var R = e.offers || [], ha = 0; ha < R.length; ha++)Q.push(new dmb(g.Ne(R[ha].merchant),
                                g.Ne(R[ha].price))); c = {
                                    id: c.id, timestamp: e.timestamp || 0, type: e.card_type, teaserText: e.teaser_text, teaserDurationMs: e.teaser_duration_ms, startMs: e.start_ms, autoOpen: e.auto_open || !1, sessionData: e.session_data || {}, sponsored: e.sponsored || !1, hj: f, Yo: l.card ? g.QF(l.card) : null, Lj: l.teaser ? g.QF(l.teaser) : null, Gf: l.icon ? g.QF(l.icon) : null, ImageUrl: e.Image_url, displayDomain: e.display_domain ? e.display_domain : null, showLinkIcon: !!e.show_link_icon, BC: e.button_icon_url ? e.button_icon_url : null, title: e.title, customMessage: e.custom_message ?
                                        e.custom_message : null, url: o4({ pause_on_navigation: e.pause_on_navigation, target: e.target || "new", value: e.url }), rnb: P, qnb: e.signin_title ? e.signin_title : void 0, pnb: e.signin_message ? e.signin_message : void 0, offers: Q, onClickCommand: null
                                }; x4(G, c); break; case "simple": c = {
                                    id: c.id, timestamp: e.timestamp || 0, type: e.card_type, teaserText: e.teaser_text, teaserDurationMs: e.teaser_duration_ms, startMs: e.start_ms, autoOpen: e.auto_open || !1, sessionData: e.session_data || {}, sponsored: e.sponsored || !1, hj: f, Yo: l.card ? g.QF(l.card) :
                                        null, Lj: l.teaser ? g.QF(l.teaser) : null, Gf: l.icon ? g.QF(l.icon) : null, ImageUrl: e.Image_url, displayDomain: e.display_domain ? e.display_domain : null, showLinkIcon: !!e.show_link_icon, BC: e.button_icon_url ? e.button_icon_url : null, title: e.title, customMessage: e.custom_message ? e.custom_message : null, url: o4({ pause_on_navigation: e.pause_on_navigation, target: e.target || "new", value: e.url }), onClickCommand: null
                                }; x4(G, c); break; case "video": c = {
                                    id: c.id, timestamp: e.timestamp || 0, type: e.card_type, teaserText: e.teaser_text, teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms, autoOpen: e.auto_open || !1, sessionData: e.session_data || {}, sponsored: e.sponsored || !1, hj: f, Yo: l.card ? g.QF(l.card) : null, Lj: l.teaser ? g.QF(l.teaser) : null, Gf: l.icon ? g.QF(l.icon) : null, PF: e.Image_url, videoDuration: e.video_duration || null, customMessage: e.custom_message ? e.custom_message : null, title: e.title, metaInfo: e.meta_info, isLiveNow: !!e.is_live_now, url: o4({ pause_on_navigation: e.pause_on_navigation, target: e.target || "new", value: e.url }), onClickCommand: null
                                }, x4(G, c)
                        }
                } else imb(a.j, e); c = !0
            }
        } c &&
            (Y3(a.player), a.uJ())
    }, Tmb = function (a, b) {
        var c = !1;
        a.j || (a.j = Smb(a), g.M(a, a.j)); for (var d = g.u(b.cards || []), e = d.next(); !e.done; e = d.next())e = e.value, e.cardRenderer && (jmb(a.j, e.cardRenderer), c = !0); if (c) {
            var f; null != (f = a.player.getVideoData()) && g.ZT(f) || (c = a.j, d = b.headerText ? g.FG(b.headerText) : "", g.Ef(c.Jb, d), c.Z && c.Z.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Ga = b.trackingParams ? g.QF(b.trackingParams) : null, c.N = b.closeButton.infoCardIconRenderer.trackingParams ? g.QF(b.closeButton.infoCardIconRenderer.trackingParams) :
                null, c.Gf = b.icon.infoCardIconRenderer.trackingParams ? g.QF(b.icon.infoCardIconRenderer.trackingParams) : null, a.uJ()); Y3(a.player)
        }
    }, Xmb = function (a, b, c, d, e) {
        if (!a.player.U().ze) {
            var f = [];
            b.navigationEndpoint && g.U(b.navigationEndpoint, g.RT) && g.U(b.navigationEndpoint, g.RT).browseId && f.push(new Ulb("openUrl", "click", new Slb("/channel/" + g.U(b.navigationEndpoint, g.RT).browseId, "new", !0, !0))); var h = b.watermark.thumbnails[0]; d = { channel_name: b.channelName, end_ms: b.endTimeMs, Image_height: h.height, Image_type: 1, Image_url: h.url, Image_width: h.width, is_mobile: !1, session_data: { annotation_id: c, ei: e, feature: "iv", itct: b.trackingParams, src_vid: d }, start_ms: b.startTimeMs }; if (b.subscribeButton && g.U(b.subscribeButton,
                g.ST)) {
                    d.channel_id = g.U(b.subscribeButton, g.ST).channelId; var l; b = g.U(b.subscribeButton, g.ST); h = e = null; b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.FG(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.FG(b.subscriberCountText))) : (b.subscriberCountText && (e = g.FG(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.FG(b.subscriberCountWithSubscribeText))); var m, n = (null == (m = g.U(null == (l = b.signInEndpoint) ? void 0 : l.commandMetadata, g.T2)) ? void 0 : m.url) || ""; l = {
                        subscribeText: g.FG(b.unsubscribedButtonText),
                        subscribeCount: e || "", unsubscribeText: g.FG(b.subscribedButtonText), unsubscribeCount: h || "", enabled: b.enabled || !1, classic: !1, subscribed: b.subscribed || !1, feature: "iv", signInUrl: n
                    }; d.standalone_subscribe_button_data = l
            } f = new Ylb(c, "branding", "branding", f, d); l = Kmb(a); a.B.element.appendChild(l); f = new D4(l, F4(a), f); f.CF(); g.M(f, f); a.N[c] = f
        }
    }, Pmb = function (a, b) {
        return function () {
            var c = g.Ia.apply(0, arguments);
            a.isDisposed() || a.ra.push(g.Pu.Si(function () { b.apply(null, g.oa(c)) }))
        }
    }, Ymb = function (a) { return "annotation-editor" === a || "live-dashboard" === a };
    g.DU.prototype.WA = g.ea(29, function (a, b) { var c = g.nW(this.Bb()); c && c.WA(a, b) });
    var $3 = {}, a4 = null; g.pb(c4, g.xv); g.k = c4.prototype; g.k.getDuration = function () { return this.duration };
    g.k.play = function (a) { if (a || 0 == this.j) this.progress = 0, this.coords = this.B; else if (this.isPlaying()) return !1; b4(this); this.startTime = a = g.ob(); this.isPaused() && (this.startTime -= this.duration * this.progress); this.endTime = this.startTime + this.duration; this.D = this.startTime; this.progress || this.mJ(); this.Sl("play"); this.isPaused() && this.Sl("resume"); this.j = 1; var b = g.gb(this); b in $3 || ($3[b] = this); ulb(); vlb(this, a); return !0 };
    g.k.stop = function (a) { b4(this); this.j = 0; a && (this.progress = 1); wlb(this, this.progress); this.Sl("stop"); this.Zq() };
    g.k.pause = function () { this.isPlaying() && (b4(this), this.j = -1, this.Sl("pause")) };
    g.k.xa = function () { 0 == this.j || this.stop(!1); this.Sl("destroy"); c4.Lf.xa.call(this) };
    g.k.destroy = function () { this.dispose() };
    g.k.pL = function () { this.Sl("animate") };
    g.k.Sl = function (a) { this.dispatchEvent(new xlb(a, this)) };
    g.pb(xlb, g.Bb); g.pb(d4, c4); d4.prototype.C = function () { };
    d4.prototype.pL = function () { this.C(); d4.Lf.pL.call(this) };
    d4.prototype.Zq = function () { this.C(); d4.Lf.Zq.call(this) };
    d4.prototype.mJ = function () { this.C(); d4.Lf.mJ.call(this) };
    g.pb(ylb, d4); ylb.prototype.C = function () { this.element.style.left = Math.round(this.coords[0]) + "px"; this.element.style.top = Math.round(this.coords[1]) + "px" }; g.w(Blb, g.I); g.k = Blb.prototype; g.k.Ra = function (a, b, c, d) { c = (0, g.jb)(c, d || this.B); a = g.aD(a, b, c); this.j.push(a); return a };
    g.k.KI = function (a, b, c, d) { c = (0, g.jb)(c, d || this.B); a = slb(a, b, c); this.j.push(a); return a };
    g.k.Pc = function (a) { g.bD(a); g.Jb(this.j, a) };
    g.k.yf = function () { g.bD(this.j); this.j.length = 0 };
    g.k.xa = function () { this.yf(); g.I.prototype.xa.call(this) }; g.w(Elb, g.YV); g.k = Elb.prototype; g.k.load = function () { g.YV.prototype.load.call(this); if (!g4(this)) { var a = g.PSa(this.player.getVideoData()); a ? (a = Dlb(a, Flb(this)), h4(this, a, !1)) : Glb(this) } };
    g.k.unload = function () { h4(this, null); this.C && (this.C.abort(), this.C = null); g.YV.prototype.unload.call(this) };
    g.k.Eh = function (a, b) { return g4(this) ? "loadCustomEndscreenRenderer" === a ? (a = Dlb(b, "new"), h4(this, a), !0) : null : null };
    g.k.getOptions = function () { return g4(this) ? ["loadCustomEndscreenRenderer"] : [] };
    g.k.Yb = function () {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect(); if (a && 0 !== a.width && 0 !== a.height) {
                var b = this.player.getPlayerSize(); if (b && 0 !== b.width && 0 !== b.height) {
                    var c = a.width / a.height; var d = 0; for (var e = -1, f = 0; f < Zmb.length; f++) { var h = Math.abs(b.width - Zmb[f]); if (-1 === e || d >= h) e = f, d = h } d = $mb[e]; this.B && g.rs(this.B.element, "outline-width", Math.max(b.width, b.height) + "px"); for (b = 0; b < this.endscreen.elements.length; ++b)if (f = this.endscreen.elements[b].id, e = this.j[f],
                        h = this.G[f], e && h) {
                            var l = h.width * c / h.aspectRatio, m = Math.round(h.width * a.width); f = Math.round(l * a.height); var n = a.left + Math.round(h.left * a.width), p = a.top + Math.round(h.top * a.height); g.Cs(e.element, m, f); g.ys(e.element, n, p); g.nv(e.element, anb); 256 < m || 256 < f ? g.kv(e.element, "ytp-ce-large-round") : 96 < m || 96 < f ? g.kv(e.element, "ytp-ce-medium-round") : g.kv(e.element, "ytp-ce-small-round"); g.nv(e.element, bnb); m = h.left + h.width / 2; h = h.top + l / 2; g.kv(e.element, .5 >= m && .5 >= h ? "ytp-ce-top-left-quad" : .5 < m && .5 >= h ? "ytp-ce-top-right-quad" :
                                .5 >= m && .5 < h ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad"); g.nv(e.element, $mb); g.kv(e.element, d); (e = g.$e(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.rs(e, "height", f + "px")
                    }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function (a) {
        if (this.endscreen) if ("ytp-ce-in-endscreen" === a.getId()) l4(this, this.endscreen.impressionUrls), (a = g.SF()) && this.endscreen.visualElement && g.oG(a, this.endscreen.visualElement); else {
            a = a.getId().substring(15); var b = this.j[a], c = this.G[a]; g.kv(b.element, "ytp-ce-element-show"); b.element.removeAttribute("aria-hidden"); b = this.player.getRootNode(); g.kv(b, "ytp-ce-shown"); l4(this, c.impressionUrls); (b = g.SF()) && g.oG(b, c.visualElement); this.player.U().K && this.player.ib("endscreenelementshown",
                a)
        }
    };
    g.k.onCueRangeExit = function (a) { if ("ytp-ce-in-endscreen" !== a.getId()) { a = a.getId().substring(15); var b = this.j[a]; g.mv(b.element, "ytp-ce-element-show"); b.element.setAttribute("aria-hidden", "true"); b = this.player.getRootNode(); g.mv(b, "ytp-ce-shown"); this.player.U().K && this.player.ib("endscreenelementhidden", a) } };
    g.k.Faa = function (a) { var b = this; a.target === window && (new g.cv(function () { for (var c = g.u(Object.values(b.j)), d = c.next(); !d.done; d = c.next())g.nv(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"]) }, 0)).start() };
    var Zmb = [346, 426, 470, 506, 570, 640, 853, 1280, 1920], $mb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "), bnb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"], anb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"]; var Tlb = { Pta: "current", rUa: "new" }; var Vlb = { CLOSE: "close", gYa: "openUrl", SUBSCRIBE: "subscribe" }, Wlb = { Yra: "click", CLOSE: "close", BFa: "hidden", h3a: "rollOut", i3a: "rollOver", Q4a: "shown" }; Ylb.prototype.Oe = function () {
        var a = Zlb(this, function (b) { return "openUrl" === b.type && null != b.url });
        return a ? a.url : null
    };
    var Wmb = { Gma: "anchored", X0: "branding", CHANNEL: "channel", Fta: "cta", EFa: "highlightText", FJa: "label", PLAYLIST: "playlist", N_a: "popup", Q7a: "speech", SUBSCRIBE: "subscribe", Dab: "title", VIDEO: "video", gib: "website" }, Vmb = { X0: "branding", Lpa: "card", Tva: "drawer", DFa: "highlight", PPa: "marker", u1a: "promotion", TEXT: "text", Kjb: "widget" }; g.w(s4, g.I); g.k = s4.prototype; g.k.addCueRange = function (a, b, c, d, e) { a = new g.uK(a, b, { id: c, namespace: "annotations_module" }); d && this.Xa.set(a, d); e && this.Za.set(a, e); this.context.J.sf([a]) };
    g.k.CF = function () { this.context.B.subscribe("resize", this.NG, this) };
    g.k.Kb = function () { return this.element };
    g.k.qL = function (a, b, c, d, e, f) { if (this.qb) return !1; f && (f.stopPropagation(), f.preventDefault()); this.navigate(a, c, d, e); return !1 };
    g.k.show = function () { };
    g.k.hide = function () { };
    g.k.destroy = function () { g.yf(this.Kb()) };
    g.k.NG = function () { };
    g.k.navigate = function (a, b, c, d) {
        var e = this, f = n4(a); if (f) {
            var h = fmb(f, a.target), l = function () { a.j && e.context.J.pauseVideo(); var m = e.context.videoData.If || !1, n = g.fC(f || ""); m && n && (n.v || n.list) ? e.context.J.Bo(n.v, b, n.list, !1) : g.FH(f || "", "current" === h ? "_top" : void 0, b) };
            "new" === h && (l(), l = null); E4(this.context.logger, c, l, d); emb(f) || (c = g.SF(), d = b.itct, c && d && g.rG(c, g.QF(d)))
        }
    };
    g.k.xa = function () { this.Xa.clear(); this.Za.clear(); g.I.prototype.xa.call(this) };
    g.k.createElement = function (a) { a = new g.V(a); g.M(this, a); return a.element }; g.w(hmb, s4); g.k = hmb.prototype; g.k.Rs = function () { this.ra && x4(this, this.ra) };
    g.k.isAvailable = function () { var a; if (a = !!this.cards.length) (a = this.J.getRootNode()) ? (a = g.Ds(a), a = 173 < a.width && 173 < a.height) : a = !1; return a };
    g.k.NG = function () { var a = this.isAvailable(); g.Es(this.Kb(), a); g.ov(this.context.J.getRootNode(), g.nZ.IV_DRAWER_ENABLED, a); Y3(this.J) };
    g.k.destroy = function () { this.J.WA(!1); try { this.J.getRootNode().removeChild(this.D) } catch (a) { } g.$E(this.ma); g.gD(this.Ta); this.Ua && this.Ua.dispose(); this.G && this.G.dispose(); s4.prototype.destroy.call(this) };
    g.k.findLastIndex = function (a) {
        if (0 === this.cards.length) return 0; var b = g.Gb(this.cards, function (c) { return a.dg.startMs > c.dg.startMs || a.dg.startMs === c.dg.startMs && a.dg.timestamp >= c.dg.timestamp ? !0 : !1 });
        return -1 === b ? 0 : b + 1
    };
    g.k.u5 = function () { if (this.C) { E4(this.context.logger, B4(this).hj.close); var a = g.SF(); a && this.N && g.rG(a, this.N); w4(this) } };
    g.k.Q5 = function () { g.ov(this.D, "iv-drawer-scrolled", 0 < this.B.scrollTop) };
    g.k.p8 = function () { var a = g.SF(), b = B4(this); b = b ? b.Gf : this.Gf; a && b && g.pG(a, [b]) };
    g.k.o8 = function () { var a = g.SF(), b = B4(this); b = b ? b.Gf : this.Gf; a && b && g.qG(a, [b]) };
    g.k.I1 = function () { var a = B4(this); E4(this.context.logger, a.hj.O_); var b = g.SF(); if (b && a) if (this.J.L("web_infocards_teaser_show_logging_fix")) { var c = []; a.Lj && c.push(a.Lj); a.Gf && c.push(a.Gf); 0 < c.length && g.pG(b, c) } else g.pG(b, [a.Lj, a.Gf]) };
    g.k.q8 = function () { var a = g.SF(), b = B4(this); a && b && g.qG(a, [b.Lj]) };
    g.k.H1 = function (a) { var b = B4(this), c = g.SF(); this.j ? a ? (a = this.context.logger, E4(a, b.hj.GK), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Lj && g.rG(c, b.Lj)) : (a = this.context.logger, E4(a, b.hj.GK), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Gf && g.rG(c, b.Gf)) : (a = this.context.logger, E4(a, b.hj.GK), a.J.sendVideoStatsEngageEvent(4, void 0), c && this.Gf && g.rG(c, this.Gf)) }; g.w(C4, s4); C4.prototype.CF = function () { s4.prototype.CF.call(this); wmb(this) };
    C4.prototype.show = function () { s4.prototype.show.call(this); var a = g.SF(), b = this.annotation.data; a && b && (b = b.session_data) && g.pG(a, [g.QF(b.itct)]) };
    C4.prototype.hide = function () { s4.prototype.hide.call(this); var a = g.SF(), b = this.annotation.data; a && b && (b = b.session_data) && g.qG(a, [g.QF(b.itct)]) }; g.w(D4, C4); D4.prototype.OA = function () { g.kv(this.Kb(), "iv-branding"); var a = this.annotation.data; this.B = this.createElement({ I: "img", Ma: ["branding-img", "iv-click-target"], Y: { "aria-label": "Channel watermark", src: a.Image_url, width: a.Image_width, height: a.Image_height } }); g.Es(this.B, !1); var b = this.createElement({ I: "button", Ma: ["branding-img-container", "ytp-button"] }); b.appendChild(this.B); this.Kb().appendChild(b); var c = this.annotation.Oe(); c && t4(this, b, c, this.annotation.id, a.session_data); Amb(this, a) };
    D4.prototype.show = function () { if (!this.isActive && (C4.prototype.show.call(this), this.N || (this.OA(), this.N = !0), g.Es(this.Kb(), !0), this.isActive = !0, this.B)) { try { xmb(this, this.B) } catch (a) { } g.kv(this.context.J.getRootNode(), "ytp-branding-shown") } };
    D4.prototype.hide = function () { this.isActive && (C4.prototype.hide.call(this), g.Es(this.Kb(), !1), this.isActive = !1, g.mv(this.context.J.getRootNode(), "ytp-branding-shown")) };
    D4.prototype.destroy = function () { this.j && (this.j.dispose(), this.j = null); C4.prototype.destroy.call(this) }; g.w(Cmb, C4); g.k = Cmb.prototype;
    g.k.OA = function () {
        var a = this, b = this.annotation.data; if ("cta" === this.annotation.style) var c = 6; else if ("video" === this.annotation.style || "playlist" === this.annotation.style) c = 7; this.K = b.collapsedelay_ms || this.K; var d = ["iv-promo", "iv-promo-inactive"]; this.Kb().setAttribute("aria-hidden", "true"); this.Kb().setAttribute("aria-label", "Promotion"); this.Kb().tabIndex = 0; var e = this.annotation.Oe(), f = b.Image_url; if (f) {
            var h = this.createElement({ I: "div", Ma: ["iv-promo-img", "iv-click-target"] }); f = this.createElement({
                I: "img",
                Y: { src: f, "aria-hidden": "true" }
            }); h.appendChild(f); b.video_duration && !b.is_live ? (f = this.createElement({ I: "span", S: "iv-promo-video-duration", ya: b.video_duration }), h.appendChild(f)) : b.playlist_length && (f = this.createElement({ I: "span", S: "iv-promo-playlist-length", ya: b.playlist_length.toString() }), h.appendChild(f)); e && t4(this, h, e, this.annotation.id, b.session_data, void 0, c)
        } e ? (f = this.createElement({ I: "a", S: "iv-promo-txt" }), g.oo(f, n4(e)), this.j = f) : this.j = this.createElement({ I: "div", S: "iv-promo-txt" }); switch (this.annotation.style) {
            case "cta": case "website": var l =
                this.createElement({ I: "p", V: [{ I: "strong", ya: b.text_line_1 }] }); var m = this.createElement({ I: "p", V: [{ I: "span", S: "iv-promo-link", ya: b.text_line_2 }] }); if (f = b.text_line_3) {
                    d.push("iv-promo-website-card-cta-redesign"); var n = this.createElement({ I: "button", Ma: ["iv-promo-round-expand-icon", "ytp-button"] }); f = this.createElement({ I: "button", Ma: ["iv-button", "iv-promo-button"], V: [{ I: "span", S: "iv-button-content", ya: f }] }); var p = this.createElement({ I: "div", S: "iv-promo-button-container" }); p.appendChild(f); e && t4(this,
                        this.Kb(), e, this.annotation.id, b.session_data, void 0, c)
                } g.kv(this.j, "iv-click-target"); e && t4(this, this.j, e, this.annotation.id, b.session_data, void 0, c); break; case "playlist": case "video": l = this.createElement({ I: "p", V: [{ I: "span", ya: b.text_line_1 }] }), m = this.createElement({ I: "p", V: [{ I: "strong", ya: b.text_line_2 }] }), b.is_live && (l = m, m = this.createElement({ I: "span", Ma: ["yt-badge", "iv-promo-badge-live"], ya: "LIVE NOW" })), g.kv(this.j, "iv-click-target"), e && t4(this, this.j, e, this.annotation.id, b.session_data, void 0,
                    c), d.push("iv-promo-video")
        }l && this.j.appendChild(l); m && this.j.appendChild(m); this.N.appendChild(this.j); p && this.N.appendChild(p); c = this.createElement({ I: "div", S: "iv-promo-actions" }); this.B = this.createElement({ I: "button", Ma: ["iv-promo-expand", "ytp-button"] }); this.B.title = "Expand"; this.context.j.Ra(this.B, "click", function (q) { Fmb(a, 5E3, q) });
        c.appendChild(this.B); g.Es(this.B, !1); this.context.j.Ra(this.Kb(), "mouseover", this.k7, this); this.context.j.Ra(this.Kb(), "mouseout", this.j7, this); this.context.j.Ra(this.Kb(), "touchend", function (q) { Fmb(a, 5E3, q) });
        this.C = this.createElement({ I: "button", Ma: ["iv-promo-close", "ytp-button"] }); this.C.title = "Close"; this.context.j.Ra(this.C, "click", "cta" === this.annotation.style && b.text_line_3 ? this.f7 : this.e7, this); c.appendChild(this.C); g.lv(this.Kb(), d); h && (g.vf(this.Kb(), h), n && h.appendChild(n)); g.vf(this.Kb(), this.N); g.vf(this.Kb(), c)
    };
    g.k.show = function () { this.isActive || (C4.prototype.show.call(this), this.W || (this.OA(), this.W = !0), g.Es(this.Kb(), !0), g.fg(function () { g.mv(this.Kb(), "iv-promo-inactive") }, 100, this), this.Kb().removeAttribute("aria-hidden"), this.isActive = !0, Hmb(this), Dmb(this), Emb(this, this.K)) };
    g.k.hide = function () { this.isActive && (g.kv(this.Kb(), "iv-promo-inactive"), this.isActive = !1, this.Kb().setAttribute("aria-hidden", "true")) };
    g.k.qL = function (a, b, c, d, e, f) { return this.isCollapsed ? !1 : C4.prototype.qL.call(this, a, b, c, d, e, f) };
    g.k.k7 = function (a) { this.Z = !0; Fmb(this, 500, a) };
    g.k.j7 = function () { this.Z = !1; Gmb(this) };
    g.k.e7 = function (a) { a.stopPropagation(); this.hide() };
    g.k.f7 = function (a) { a.stopPropagation(); Hmb(this); this.isCollapsed = !0; g.kv(this.Kb(), "iv-promo-collapsed-no-delay"); this.G.start() };
    g.k.destroy = function () { this.G.dispose(); C4.prototype.destroy.call(this) }; g.w(Jmb, g.YV); g.k = Jmb.prototype; g.k.Eh = function (a, b) { if (!Ymb(this.player.U().playerStyle)) return null; switch (a) { case "loadCustomAnnotationsXml": return (a = g.z2(b)) && Omb(this, a), !0; case "removeCustomAnnotationById": return b && this.j && (lmb(this.j, b), Y3(this.player)), !0 }return null };
    g.k.getOptions = function () { return Ymb(this.player.U().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : [] };
    g.k.Ut = function () { var a = this.player.U(), b = this.player.getVideoData(), c = a.annotationsLoadPolicy || b.annotationsLoadPolicy; return g.mU(b) || g.wU(this.player.app) ? !1 : 1 === c && !b.GU || a.Na.get(b.videoId) || g.$T(b) || g.QSa(b) ? !0 : !1 };
    g.k.uJ = function () { if (this.C) { var a = this.player.rb().getVideoContentRect(!0); g.Cs(this.C.element, a.width, a.height); g.ys(this.C.element, a.left, a.top) } if (this.j) { var b = this.player.qn(); a = this.j; b = b.width; g.ov(a.D, "iv-drawer-small", 426 >= b); g.ov(a.D, "iv-drawer-big", 1280 <= b) } };
    g.k.J1 = function (a) { Lmb(this, a.state); g.kH(a.state, 2) && (this.Fk() && this.Vo() && 2 !== this.player.getPresentingPlayerType() && this.XA(!1), this.WA(!1)) };
    g.k.load = function () {
        function a(h) { var l = b.loadNumber; b.G = null; b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.mC(h) && h.responseXML ? h.responseXML : null) && (Omb(b, h), g.kv(b.player.getRootNode(), "iv-module-loaded")) }
        var b = this; g.YV.prototype.load.call(this); Lmb(this, this.player.Ub()); this.loadNumber++; var c = this.player.getVideoData(), d = c.videoId; g.zD() && (a = Pmb(this, a)); var e = {
            format: "XML", onFinish: a, onError: function () { b.G = null },
            urlParams: {}
        }; c.isPharma && (e.urlParams.pharma = "1"); e.method = "POST"; e.withCredentials = !0; var f = this.player.U().Na.get(d); f && Qmb(e, f); f = f && (f.HM || f.TG); if (!c.sx || f) c.Xa ? Mmb(this, c.Xa, e) : (this.K = function () { if (!b.Z) b.onVideoDataChange(e); var h = b.player.getVideoData(); (null == h ? 0 : g.ZT(h)) && !b.ma && Umb(b, h) }, this.player.addEventListener("videodatachange", this.K));
        g.KU(this.player, this.C.element, 4); this.uJ(); (f = g.$T(c)) && Tmb(this, f); (f = g.QSa(c)) && f.featuredChannel && Xmb(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null); this.Sg = g.df("ytp-cards-button", this.player.getRootNode()); g.ZT(c) && Umb(this, c)
    };
    g.k.onVideoDataChange = function (a) { var b = this.player.getVideoData(); b.Xa && Mmb(this, b.Xa, a) };
    g.k.unload = function () { this.player.zf("annotations_module"); for (var a = g.u(Object.keys(this.N)), b = a.next(); !b.done; b = a.next())this.N[b.value].destroy(); this.W = null; this.j && (this.j.destroy(), this.j = null, Y3(this.player)); this.Z = !1; this.G && (this.G.abort(), this.G = null); this.ma = !1; this.N = {}; this.B.hide(); g.YV.prototype.unload.call(this); this.C.detach(); this.K && (this.player.removeEventListener("videodatachange", this.K), this.K = null) };
    g.k.lZ = function (a) { a === this.player.getVideoData().videoId && (this.loaded ? Rmb(this) : this.load()) };
    g.k.Fk = function () { var a; return (null == (a = this.j) ? void 0 : a.isAvailable()) || this.ma };
    g.k.Vo = function () { return !!this.j && this.j.C };
    g.k.XA = function (a, b, c) { b = void 0 === b ? !1 : b; this.Fk(); this.j && (a ? c ? v4(this.j, c, b) : v4(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : w4(this.j)) };
    g.k.WA = function (a, b) { this.player.oa(a ? "cardsteasershow" : "cardsteaserhide", b) };
    g.k.xa = function () { this.player.U().Na.unsubscribe("vast_info_card_add", this.lZ, this); g.mv(this.player.getRootNode(), g.nZ.IV_DRAWER_OPEN); for (var a = this.ra, b = g.Pu, c = 0, d = a.length; c < d; c++)b.Oj(a[c]); this.ra.length = 0; g.YV.prototype.xa.call(this) };
    g.k.createElement = function (a) { a = new g.V(a); g.M(this, a); return a.element }; g.XV("annotations_module", Jmb); g.XV("creatorendscreen", Elb);
})(_yt_player);
