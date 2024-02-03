(function (g) {
    var window = this; 'use strict'; var zsb = function (a, b) { var c = []; return g.bE(a, { query: b }, function (d) { c.push(d.getValue()); return d.continue() }).then(function () { return c }) }, Asb = function (a, b) { return "getAll" in IDBIndex.prototype ? g.QD(a.j.getAll(b, void 0)) : zsb(a, b) }, Bsb = function (a, b) {
        return g.VD(a, ["captions"], {
            mode: "readonly",
            Tb: !0
        }, function (c) { return g.Dqa(c.objectStore("captions"), b) })
    }, Csb = function (a) {
        var b = new g.RP("und", new g.xR("Default", "und", !0));
        b.captionTracks = a.captionTracks; return b
    }, Dsb = function (a) {
        return new g.Yf(function (b, c) {
            var d = a.length, e = [];
            if (d) for (var f = function (n, p) { d--; e[n] = p; 0 == d && b(e) }, h = function (n) { c(n) }, l = 0, m; l < a.length; l++)m = a[l], g.hca(m, g.kb(f, l), h);
            else b(e)
        })
    }, O6 = function (a) { this.j = a }, P6 = function () { O6.apply(this, arguments) }, Esb = function () { P6.apply(this, arguments) }, Fsb = function () { P6.apply(this, arguments) }, Gsb = function () { P6.apply(this, arguments) }, Hsb = function () { O6.apply(this, arguments) }, Isb = function () { P6.apply(this, arguments) }, Jsb = function () { P6.apply(this, arguments) }, Ksb = function () { P6.apply(this, arguments) }, Lsb = function () { P6.apply(this, arguments) }, Msb = function () { P6.apply(this, arguments) }, Nsb = function () { P6.apply(this, arguments) }, Osb = function () {
        P6.apply(this,
            arguments)
    }, Psb = function () { P6.apply(this, arguments) }, Qsb = function () { P6.apply(this, arguments) }, Rsb = function () { P6.apply(this, arguments) }, Ssb = function () { P6.apply(this, arguments) }, Tsb = function () { O6.apply(this, arguments) }, Usb = function () { P6.apply(this, arguments) }, Vsb = function () { P6.apply(this, arguments) }, Wsb = function () { P6.apply(this, arguments) }, Xsb = function () { P6.apply(this, arguments) }, Ysb = function () { P6.apply(this, arguments) }, Zsb = function () { P6.apply(this, arguments) }, $sb = function () { P6.apply(this, arguments) },
        atb = function () { P6.apply(this, arguments) }, btb = function () { P6.apply(this, arguments) }, ctb = function () { O6.apply(this, arguments) }, dtb = function () { O6.apply(this, arguments) }, etb = function () { O6.apply(this, arguments) }, ftb = function () { P6.apply(this, arguments) }, gtb = function () { P6.apply(this, arguments) }, htb = function () { P6.apply(this, arguments) }, itb = function () { P6.apply(this, arguments) }, jtb = function () { P6.apply(this, arguments) }, ktb = function () { P6.apply(this, arguments) }, ltb = function () { P6.apply(this, arguments) }, mtb = function () {
            P6.apply(this,
                arguments)
        }, ntb = function () { P6.apply(this, arguments) }, otb = function () { P6.apply(this, arguments) }, ptb = function () { P6.apply(this, arguments) }, qtb = function () { P6.apply(this, arguments) }, rtb = function () { P6.apply(this, arguments) }, stb = function () { P6.apply(this, arguments) }, ttb = function () { P6.apply(this, arguments) }, utb = function () { P6.apply(this, arguments) }, vtb = function () { P6.apply(this, arguments) }, wtb = function () { P6.apply(this, arguments) }, xtb = function () { P6.apply(this, arguments) }, ytb = function () { P6.apply(this, arguments) },
        ztb = function () { P6.apply(this, arguments) }, Atb = function () { P6.apply(this, arguments) }, Btb = function () { P6.apply(this, arguments) }, Ctb = function () { O6.apply(this, arguments) }, Dtb = function () { P6.apply(this, arguments) }, Etb = function () { P6.apply(this, arguments) }, Ftb = function () { P6.apply(this, arguments) }, Gtb = function () { P6.apply(this, arguments) }, Htb = function () { P6.apply(this, arguments) }, Itb = function () { P6.apply(this, arguments) }, Jtb = function () { P6.apply(this, arguments) }, Ktb = function () { P6.apply(this, arguments) }, Ltb = function () {
            P6.apply(this,
                arguments)
        }, Mtb = function () { P6.apply(this, arguments) }, Ntb = function () { P6.apply(this, arguments) }, Otb = function () { P6.apply(this, arguments) }, Ptb = function () { P6.apply(this, arguments) }, Qtb = function () { P6.apply(this, arguments) }, Rtb = function () { P6.apply(this, arguments) }, Stb = function () { P6.apply(this, arguments) }, Ttb = function () { P6.apply(this, arguments) }, Utb = function () { P6.apply(this, arguments) }, Vtb = function () { P6.apply(this, arguments) }, Wtb = function () { P6.apply(this, arguments) }, Xtb = function () { P6.apply(this, arguments) },
        Ytb = function () { P6.apply(this, arguments) }, Ztb = function () { P6.apply(this, arguments) }, $tb = function () { P6.apply(this, arguments) }, aub = function (a) { return g.eE((0, g.Dkb)(), a) }, Q6 = function (a) { this.token = a }, bub = function (a) {
            a = a.key || a.id;
            if (!a) throw Error("Entity key is missing"); return a
        }, cub = function () {
            if (R6) return R6();
            var a = {}; R6 = g.lE("PersistentEntityStoreDb", {
                Yq: (a.EntityStore = { Um: 1 }, a.EntityAssociationStore = { Um: 2 }, a), shared: !1, upgrade: function (b, c) { c(1) && g.ZD(g.TD(b, "EntityStore", { keyPath: "key" }), "entityType", "entityType"); c(2) && (b = g.TD(b, "EntityAssociationStore", { keyPath: ["parentEntityKey", "childEntityKey"] }), g.ZD(b, "byParentEntityKey", "parentEntityKey"), g.ZD(b, "byChildEntityKey", "childEntityKey")) },
                version: 3
            }); return R6()
        }, dub = function (a) { return g.eE(cub(), a) }, S6 = function (a, b) {
            b = void 0 === b ? {} : b;
            g.rD.call(this, g.Lkb[a], Object.assign({}, { name: "PESEncoderError", type: a }, b)); this.type = a; this.level = "WARNING"; Object.setPrototypeOf(this, S6.prototype)
        }, eub = function (a) { return new S6("WRONG_DATA_TYPE", { a6: a }) }, fub = function (a) { return a instanceof Error ? new S6("UNKNOWN_ENCODE_ERROR", { tQ: a.message }) : new S6("UNKNOWN_ENCODE_ERROR") }, gub = function (a) { return a instanceof Error ? new S6("UNKNOWN_DECODE_ERROR", { tQ: a.message }) : new S6("UNKNOWN_DECODE_ERROR") }, hub = function (a, b) {
            a = a instanceof S6 ? a : b(a);
            g.VF(a); throw a;
        }, iub = function () { }, jub = function (a, b, c) { try { return a.C(b, c) } catch (d) { hub(d, fub) } }, kub = function (a) {
            a = (new TextEncoder).encode(a).subarray(0, 16);
            var b = new Uint8Array(16); b.set(a); return b
        }, T6 = function (a) { this.j = a }, mub = function (a) {
            var b = lub[a];
            if (b) return b; g.WF(new g.rD("Entity model not found.", { entityType: a }))
        }, nub = function (a, b) {
            this.j = a;
            this.B = b; this.C = {}
        }, pub = function (a, b) {
            a: {
                a = oub(a.B, b.version);
                try { var c = a.B(b.data, b.key); break a } catch (d) { hub(d, gub) } c = void 0
            } return c
        }, U6 = function (a, b, c) {
            return a.j.objectStore("EntityStore").get(b).then(function (d) {
                if (d) {
                    if (c && d.entityType !== c) throw Error("Incorrect entity type");
                    return pub(a, d)
                }
            })
        }, V6 = function (a, b, c) { return c ? (c = c.map(function (d) { return U6(a, d, b) }), g.PD.all(c)) : Asb(a.j.objectStore("EntityStore").index("entityType"), IDBKeyRange.only(b)).then(function (d) { return d.map(function (e) { return pub(a, e) }) }) }, X6 = function (a, b, c) {
            var d = bub(b), e = oub(a.B, 1), f = Object.assign({}, b);
            return a.j.objectStore("EntityStore").get(d).then(function (h) { if (h) { if (h.entityType !== c) throw Error("Incorrect entity type"); f.entityMetadata || (h = pub(a, h), f.entityMetadata = h.entityMetadata) } }).then(function () {
                var h = {
                    key: d,
                    entityType: c, data: jub(e, f, d), version: 1
                }; return g.PD.all([g.WD(a.j.objectStore("EntityStore"), h), qub(a, f, c)])
            }).then(function () {
                W6(a, d, c);
                return d
            })
        }, rub = function (a, b, c) {
            b = b.map(function (d) { return X6(a, d, c) });
            return g.PD.all(b)
        }, Y6 = function (a, b, c) {
            if (null == c ? 0 : c.Wu) {
                var d = new Set;
                return sub(a, b, d).then(function () { for (var f = [], h = g.u(d), l = h.next(); !l.done; l = h.next())f.push(Y6(a, l.value)); return g.PD.all(f).then(function () { }) })
            } var e = g.fP(b).entityType;
            return g.PD.all([a.j.objectStore("EntityStore").delete(b), tub(a, b)]).then(function () { W6(a, b, e) })
        }, uub = function (a, b) {
            return g.bE(a.j.objectStore("EntityStore").index("entityType"), { query: IDBKeyRange.only(b) }, function (c) {
                return g.PD.all([c.delete(),
                tub(a, c.WH())]).then(function () { W6(a, c.WH(), b); return c.continue() })
            })
        }, vub = function (a, b, c, d) {
            var e = oub(a.B, 1);
            return U6(a, b, d).then(function (f) { if (f) { f = g.gHa(f, c); var h = { key: b, entityType: d, data: jub(e, f, b), version: 1 }; return g.PD.all([g.WD(a.j.objectStore("EntityStore"), h), qub(a, f, d)]) } }).then(function () {
                W6(a, b, d);
                return b
            })
        }, W6 = function (a, b, c) {
            var d = a.C[c];
            d || (d = new Set, a.C[c] = d); d.add(b)
        }, wub = function (a, b, c) {
            var d = bub(b);
            c = mub(c); if (!c) return g.PD.resolve([]); c = new c(b); a = a.j.objectStore("EntityAssociationStore"); b = []; c = g.u(c.B()); for (var e = c.next(); !e.done; e = c.next())b.push(g.WD(a, { parentEntityKey: d, childEntityKey: e.value })); return g.PD.all(b).then(function (f) { return f.map(function (h) { return h[1] }) })
        }, tub = function (a, b) { return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b)) }, qub = function (a, b, c) {
            var d = bub(b);
            return tub(a, d).then(function () { return wub(a, b, c) })
        }, sub = function (a, b, c) {
            if (c.has(b)) return g.PD.resolve(void 0);
            c.add(b); return xub(a, b).then(function (d) { return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b)).then(function () { return d }) }).then(function (d) {
                var e = g.PD.resolve(void 0);
                d = g.u(d); for (var f = d.next(), h = {}; !f.done; h = { rZ: void 0 }, f = d.next())h.rZ = f.value, e = e.then(function (l) { return function () { return sub(a, l.rZ, c) } }(h));
                return e
            }).then(function () { })
        }, xub = function (a, b) {
            var c = a.j.objectStore("EntityAssociationStore");
            return Asb(c.index("byParentEntityKey"), IDBKeyRange.only(b)).then(function (d) { var e = []; d = g.u(d); for (var f = d.next(); !f.done; f = d.next())f = f.value, e.push(Asb(c.index("byChildEntityKey"), f.childEntityKey)); return g.PD.all(e) }).then(function (d) {
                var e = [];
                d = g.u(d); for (var f = d.next(); !f.done; f = d.next())f = f.value, 1 === f.length && e.push(f[0].childEntityKey); return e
            })
        }, Z6 = function () { }, yub = function () {
            this.j = {};
            this.j[0] = new Z6; if (!g.XB("aes_pes_encoder_killswitch")) { var a = this.j; try { var b = g.sD(); var c = kub(b); var d = new T6(new g.xO(c), new g.wO(c)) } catch (e) { throw a = e instanceof Error ? new S6("KEY_CREATION_FAILED", { tQ: e.message }) : new S6("KEY_CREATION_FAILED"), g.VF(a), a; } a[1] = d }
        }, oub = function (a, b) {
            b = void 0 === b ? 0 : b;
            a = a.j[b]; if (!a) throw b = new S6("INVALID_ENCODER_VERSION", { a6: b }), g.VF(b), b; return a
        }, $6 = function (a, b) {
            g.I.call(this);
            this.token = a; this.j = b; this.observers = []; a = new g.Sa.BroadcastChannel("PERSISTENT_ENTITY_STORE_SYNC:" + g.sD()); a.onmessage = this.B.bind(this); this.channel = a
        }, a7 = function (a, b, c) {
            var d, e, f, h;
            return g.H(function (l) {
                if (1 == l.j) return g.z(l, dub(a.token), 2); if (3 != l.j) return d = l.B, g.z(l, g.VD(d, ["EntityStore", "EntityAssociationStore"], b, function (m) { e = new nub(m, a.j); return c(e) }), 3);
                f = l.B; e && (h = e.C, 0 < Object.keys(h).length && (a.channel.postMessage(h), zub(a, h))); return l.return(f)
            })
        }, Aub = function (a, b) {
            a.observers.push(b);
            return function () { var c = a.observers.indexOf(b); 0 <= c && a.observers.splice(c, 1) }
        }, b7 = function (a, b, c) {
            return a7(a, {
                mode: "readwrite",
                Tb: !0
            }, function (d) { return X6(d, b, c) })
        }, Bub = function (a, b) {
            return a7(a, {
                mode: "readwrite",
                Tb: !0
            }, function (c) { return rub(c, b, "offlineOrchestrationActionWrapperEntity") })
        }, Cub = function (a, b) {
            return a7(a, {
                mode: "readwrite",
                Tb: !0
            }, function (c) { return Y6(c, b) })
        }, c7 = function (a, b, c) {
            return a7(a, {
                mode: "readonly",
                Tb: !0
            }, function (d) { return U6(d, b, c) })
        }, d7 = function (a, b, c) {
            return a7(a, {
                mode: "readonly",
                Tb: !0
            }, function (d) { return V6(d, b, c) })
        }, zub = function (a, b) {
            a = g.u(a.observers);
            for (var c = a.next(); !c.done; c = a.next())c = c.value, c(b)
        }, Dub = function () {
            var a, b, c;
            return g.H(function (d) { if (1 == d.j) return g.Ba(d, 2), g.z(d, g.jE(), 4); if (2 != d.j) { a = d.B; if (!a || !g.tD() || "undefined" === typeof g.Sa.BroadcastChannel) return d.return(); b = new yub; return d.return(new $6(a, b)) } c = g.Da(d); c instanceof Error && g.VF(c); return d.return() })
        }, e7 = function () {
            Eub || (Eub = Dub());
            return Eub
        }, Fub = function (a) {
            var b;
            a = null == (b = a.options) ? void 0 : b.persistenceOption; return "ENTITY_PERSISTENCE_OPTION_PERSIST" === a || "ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST" === a
        }, Gub = function (a) {
            var b;
            return g.H(function (c) {
                return 1 == c.j ? g.z(c, e7(), 2) : (b = c.B) ? g.z(c, a7(b, "readwrite", function (d) {
                    for (var e = {}, f = g.u(a), h = f.next(), l = {}; !h.done; l = { jk: void 0, lE: void 0 }, h = f.next())l.jk = h.value, l.jk.entityKey && Fub(l.jk) && (l.lE = g.ed(l.jk.payload), h = void 0, "ENTITY_MUTATION_TYPE_REPLACE" === l.jk.type && (h = function (m) { return function () { return X6(d, m.jk.payload[m.lE], m.lE) } }(l)), "ENTITY_MUTATION_TYPE_DELETE" === l.jk.type && (h = function (m) { return function () { return Y6(d, m.jk.entityKey) } }(l)), "ENTITY_MUTATION_TYPE_UPDATE" ===
                        l.jk.type && (h = function (m) { return function () { return vub(d, m.jk.entityKey, m.jk.payload[m.lE], m.lE) } }(l)), h && (e[l.jk.entityKey] = e[l.jk.entityKey] ? e[l.jk.entityKey].then(h) : h()));
                    return g.PD.all(Object.values(e))
                }), 0) : c.return()
            })
        }, Hub = function (a) {
            var b;
            return g.H(function (c) { if (1 == c.j) { b = a.mutations; if (!b || 0 >= b.length) return c.return(); if (g.FT) { var d = { type: "ENTITY_LOADED" }; void 0 !== b && (d.payload = b); g.FT.dispatch(d) } return g.z(c, Gub(b), 2) } b.length = 0; g.Aa(c) })
        }, Iub = function (a) { return void 0 !== a }, Jub = function (a) {
            var b = g.eT();
            b = Object.assign({}, b); a = Object.assign({}, a); for (var c in b) a[c] ? (4 !== b[c] && (b[c] = a[c]), delete a[c]) : 2 !== b[c] && (b[c] = 4); Object.assign(b, a); g.qRa(b); JSON.stringify(b); return b
        }, Kub = function (a) {
            var b, c;
            return g.H(function (d) { if (1 == d.j) return g.z(d, g.jE(), 2); if (3 != d.j) return (b = d.B) ? g.z(d, g.hT(b), 3) : d.return(); c = d.B; return d.return(g.VD(c, ["index", "media", "captions"], { mode: "readwrite", Tb: !0 }, function (e) { var f = IDBKeyRange.bound(a + "|", a + "~"); e = [e.objectStore("index").delete(f), e.objectStore("media").delete(f), e.objectStore("captions").delete(f)]; return g.PD.all(e).then(function () { }) })) })
        }, Lub = function () {
            var a, b;
            return g.H(function (c) {
                if (1 == c.j) return g.z(c, g.jE(), 2); if (3 != c.j) { a = c.B; if (!a) throw g.ND("rvdfd"); return g.z(c, g.hT(a), 3) } b = c.B; return c.return(g.VD(b, ["index", "media"], { mode: "readwrite", Tb: !0 }, function (d) {
                    var e = {}; return g.$D(d.objectStore("index"), {}, function (f) {
                        var h = f.getKey().match(/^([\w\-_]+)\|(a|v)$/), l = g.PD.resolve(void 0); if (h) { var m = h[1]; h = h[2]; e[m] = e[m] || {}; var n; e[m][h] = g.vRa(null == (n = f.getValue()) ? void 0 : n.fmts) } else l = f.delete().then(function () { });
                        return g.PD.all([f.continue(), l]).then(function (p) { return g.u(p).next().value })
                    }).then(function () {
                        for (var f = {}, h = g.u(Object.keys(e)), l = h.next(); !l.done; l = h.next()) {
                            l = l.value;
                            var m = e[l].v; f[l] = e[l].a && m ? 1 : 2
                        } var n = Jub(f); return g.Gqa(d.objectStore("media"), {}, function (p) { var q = p.getKey().match(g.BRa); q && f[q[1]] || d.objectStore("media").delete(p.getKey()); return p.continue() }).then(function () { return n })
                    })
                }))
            })
        }, Mub = function (a, b) {
            var c, d;
            return g.H(function (e) { if (1 == e.j) return g.z(e, g.jE(), 2); if (3 != e.j) { c = e.B; if (!c) throw g.ND("wct"); return g.z(e, g.hT(c), 3) } d = e.B; return g.z(e, g.VD(d, ["captions"], { mode: "readwrite", Tb: !0 }, function (f) { var h = []; f = f.objectStore("captions"); for (var l = 0; l < b.length; l++) { var m = g.WD(f, b[l], a + "|" + b[l].metadata.vss_id); h.push(m) } return g.PD.all(h) }), 0) })
        }, Nub = function (a) {
            var b, c, d;
            return g.H(function (e) { if (1 == e.j) return b = IDBKeyRange.bound(a + "|", a + "~"), g.z(e, g.jE(), 2); if (3 != e.j) { c = e.B; if (!c) throw g.ND("gactfv"); return g.z(e, g.hT(c), 3) } d = e.B; return e.return(Bsb(d, b)) })
        }, Oub = function (a) {
            return g.H(function (b) {
                g.gT(a, 0);
                return b.return(Kub(a))
            })
        }, Pub = function (a) {
            return {
                context: g.IH(),
                videoIds: a
            }
        }, Qub = function (a) {
            return {
                context: g.IH(),
                playlistIds: a
            }
        }, Rub = function (a) {
            return {
                context: g.IH(),
                offlinePlaylistSyncChecks: a
            }
        }, Sub = function (a, b, c, d, e, f) {
            a = { entityKey: a };
            c && (a.refreshData = c); d && (a.isExpiredStreamUrlRefetch = d); e && (a.downloadParameters = e); f && (a.offlineSourceData = f); return { context: g.YSa(b), signatureTimestamp: 19751, videos: [a] }
        }, Tub = function () { this.j = new Map }, Vub = function () {
            Uub || (Uub = new Tub);
            return Uub
        }, Wub = function (a, b) {
            return {
                eventType: {
                    flowEventNamespace: "FLOW_EVENT_NAMESPACE_OFFLINE_ORCHESTRATION",
                    flowEventType: a
                }, metadata: b, statusCode: void 0, csn: void 0, can: void 0
            }
        }, Xub = function (a, b, c) {
            if (!c) {
                var d = void 0 === d ? !1 : d;
                c = a.j.get("FLOW_TYPE_OFFLINE_ORCHESTRATION"); if (!c || d) c = g.hF(16), a.j.set("FLOW_TYPE_OFFLINE_ORCHESTRATION", c)
            } a = { flowNonce: c, flowType: "FLOW_TYPE_OFFLINE_ORCHESTRATION", flowEventType: b.eventType }; b.metadata && (a.flowMetadata = b.metadata); void 0 !== b.statusCode && (a.flowEventStatus = b.statusCode); b.csn && (a.csn = b.csn); b.can && (a.can = b.can); g.DD("flowEvent", a, void 0)
        }, Yub = function (a) {
            var b, c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb, Qa, Xa, Za, rb, ib;
            return g.H(function (A) {
                if (1 == A.j) return g.z(A, a7(a, { mode: "readonly", Tb: !0 }, function (C) {
                    return V6(C, "playbackData").then(function (D) {
                        var J = D.map(function (ia) { return ia.transfer }).filter(function (ia) { return !!ia }), K = D.map(function (ia) { return ia.offlineVideoPolicy }).filter(function (ia) { return !!ia }), aa = D.filter(function (ia) { return !!ia.key }).map(function (ia) { return g.gP(g.fP(ia.key).entityId, "downloadStatusEntity") });
                        J = V6(C, "transfer", J); K = V6(C, "offlineVideoPolicy", K); aa = V6(C, "downloadStatusEntity", aa); var qa = J.then(function (ia) {
                            ia = ia.reduce(function (L, X) { (null == X ? 0 : X.offlineVideoStreams) && L.push.apply(L, g.oa(X.offlineVideoStreams)); return L }, []).filter(function (L) { return !!L });
                            return V6(C, "offlineVideoStreams", ia)
                        });
                        return g.PD.all([J, K, qa, aa]).then(function (ia) { var L = g.u(ia); ia = L.next().value; var X = L.next().value, ya = L.next().value; L = L.next().value; return [D, ia, X, ya, L] })
                    })
                }), 2);
                if (3 != A.j) return b = A.B, g.z(A, a7(a, { mode: "readonly", Tb: !0 }, function (C) { return V6(C, "mainDownloadsListEntity").then(function (D) { var J, K; return null != (K = null == (J = D[0]) ? void 0 : J.downloads) ? K : [] }) }), 3);
                c = A.B; d = g.u(b); e = d.next().value; f = d.next().value; h = d.next().value; l = d.next().value; m = d.next().value; n = e; p = f; q = h; r = l; t = m; v = {}; x = {}; B = {}; E = {}; F = {}; G = []; P = g.u(p); for (Q = P.next(); !Q.done; Q = P.next())(R = Q.value) && (v[R.key] = R); ha = g.u(q); for (wa = ha.next(); !wa.done; wa = ha.next())(ua = wa.value) && (x[ua.key] = ua); ma = g.u(t); for (sa = ma.next(); !sa.done; sa = ma.next())(da = sa.value) && (B[da.key] = da); ba = g.u(r); for (La = ba.next(); !La.done; La = ba.next())(y = La.value) && (E[y.key] = y); Z = g.u(c); for (Ta = Z.next(); !Ta.done; Ta = Z.next())db =
                    Ta.value, nb = void 0, F[null != (nb = db.videoItem) ? nb : ""] = !0, db.videoItem && (Xa = Qa = void 0, Za = null != (Xa = null == (Qa = g.fP(db.videoItem)) ? void 0 : Qa.entityId) ? Xa : "", G.push({ externalVideoId: Za })); rb = n.filter(function (C) { if (!C || !C.key) return !1; C = g.fP(C.key).entityId; C = g.gP(C, "downloadStatusEntity"); var D; return !(C && "DOWNLOAD_STATE_USER_DELETED" === (null == (D = B[C]) ? void 0 : D.downloadState)) });
                ib = rb.map(function (C) {
                    var D = v[C.transfer], J = []; if (null == D ? 0 : D.offlineVideoStreams) for (var K = g.u(D.offlineVideoStreams), aa = K.next(); !aa.done; aa = K.next())(aa = E[aa.value]) && J.push(aa); K = x[C.offlineVideoPolicy]; aa = F; var qa = null == C ? void 0 : C.playerResponseTimestamp, ia = g.fP(K.key).entityId; C = g.gP(ia, "mainVideoEntity"); if ("OFFLINE_VIDEO_POLICY_ACTION_DISABLE" === K.action) { var L = "OFFLINE_VIDEO_STATE_DISABLED"; K.expirationTimestamp && Number(K.expirationTimestamp) < Date.now() / 1E3 && (L = "OFFLINE_VIDEO_STATE_EXPIRED") } else if ("OFFLINE_VIDEO_POLICY_ACTION_DOWNLOAD_FAILED" ===
                        K.action) L = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED"; else {
                            switch (null == D ? void 0 : D.transferState) {
                                case "TRANSFER_STATE_TRANSFER_IN_QUEUE": L = "OFFLINE_VIDEO_STATE_PENDING"; break; case "TRANSFER_STATE_TRANSFERRING": L = "OFFLINE_VIDEO_STATE_TRANSFERRING"; break; case "TRANSFER_STATE_PAUSED_BY_USER": L = "OFFLINE_VIDEO_STATE_PAUSED_TRANSFER"; break; case "TRANSFER_STATE_FAILED": L = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED"; break; case "TRANSFER_STATE_COMPLETE": L = "OFFLINE_VIDEO_STATE_PLAYABLE"; break; case "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH": L =
                                    "OFFLINE_VIDEO_STATE_STREAMS_OUT_OF_DATE"; break; default: L = "OFFLINE_VIDEO_STATE_UNKNOWN"
                            }if ("OFFLINE_VIDEO_STATE_OFFLINE_FAILED" === L) switch (null == D ? void 0 : D.failureReason) {
                                case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE": L = "OFFLINE_VIDEO_STATE_OUT_OF_STORAGE_ERROR"; break; case "TRANSFER_FAILURE_REASON_STREAM_MISSING": L = "OFFLINE_VIDEO_STATE_STREAMS_MISSING"; break; case "TRANSFER_FAILURE_REASON_NETWORK": case "TRANSFER_FAILURE_REASON_NETWORK_LOST": L =
                                    "OFFLINE_VIDEO_STATE_NETWORK_ERROR"
                            }
                    } ia = { id: ia, videoState: L }; if (null == D ? 0 : D.cotn) ia.cotn = D.cotn; if (null == D ? 0 : D.maximumDownloadQuality) ia.selectedVideoQuality = null == D ? void 0 : D.maximumDownloadQuality; if (null == D ? 0 : D.lastProgressTimeMs) ia.lastProgressTimeMs = D.lastProgressTimeMs; qa && (ia.playerResponseSavedTimeMs = String(1E3 * Number(qa))); D = String; qa = 0; J = g.u(J); for (L = J.next(); !L.done; L = J.next())if (L = L.value, L.streamsProgress) {
                        L = g.u(L.streamsProgress); for (var X = L.next(); !X.done; X = L.next()) {
                            var ya = void 0; qa +=
                                Number(null != (ya = X.value.numBytesDownloaded) ? ya : 0)
                        }
                    } ia.downloadedBytes = D(qa); ia.selectedOfflineMode = aa[C] ? "OFFLINE_MODE_TYPE_AUTO_OFFLINE" : "OFFLINE_NOW"; "OFFLINE_VIDEO_POLICY_ACTION_DISABLE" === K.action && (ia.offlinePlaybackDisabledReason = K.offlinePlaybackDisabledReason); return ia
                });
                return A.return({ offlineVideos: ib, additionalOfflineClientState: { mainAppAdditionalOfflineClientState: { smartDownloadVideos: G } } })
            })
        }, Zub = function () { this.locks = navigator.locks }, $ub = function () {
            try {
                var a = g.Va("ytglobal.locks_");
                if (a) return a; var b; if (b = navigator) { var c = navigator; b = "locks" in c && !!c.locks } if (b) return g.Sa.localStorage && g.Sa.localStorage.getItem("noop"), a = new Zub, g.Ua("ytglobal.locks_", a), a
            } catch (d) { }
        }, f7 = function () { }, avb = function () { }, bvb = function (a) {
            if (a.includes(":")) throw Error("Invalid user cache name: " + a);
            return a + ":" + g.sD("CacheStorage get")
        }, cvb = function () {
            return g.H(function (a) {
                if (void 0 !== g7) return a.return(g7);
                g7 = new Promise(function (b) { var c; return g.H(function (d) { switch (d.j) { case 1: return g.Ba(d, 2), g.z(d, h7.open("test-only"), 4); case 4: return g.z(d, h7.delete("test-only"), 5); case 5: g.Ca(d, 3); break; case 2: if (c = g.Da(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return(); case 3: b("caches" in window), g.Aa(d) } }) });
                return a.return(g7)
            })
        }, evb = function () {
            return g.H(function (a) {
                if (1 == a.j) return g.z(a, cvb(), 2);
                if (!a.B) return a.return(void 0); dvb || (dvb = new avb); return a.return(dvb)
            })
        }, i7 = function (a, b, c) {
            g.WF(new g.rD("Woffle: " + a, c ? { cotn: c } : ""));
            b instanceof Error && g.WF(b)
        }, fvb = function (a) {
            var b;
            return g.H(function (c) { if (1 == c.j) return g.z(c, Yub(a), 2); b = c.B; g.DD("offlineStateSnapshot", b); g.Aa(c) })
        }, j7 = function (a) {
            g.I.call(this);
            var b = this; this.api = a; this.Bd = {
                vlb: function () { return b.j },
                Nlb: function () { return b.B }
            };
            "undefined" !== typeof g.Sa.BroadcastChannel && (this.j = new g.Sa.BroadcastChannel("PLAYER_OFFLINE_ERROR_SYNC:" + g.sD()), this.j.onmessage = this.C.bind(this), this.B = new g.Sa.BroadcastChannel("PLAYER_OFFLINE_PAUSE_SYNC:" + g.sD()), this.B.onmessage = this.D.bind(this))
        }, k7 = function (a, b) {
            a.api.ib("onOfflineOperationFailure", b);
            var c; null == (c = a.j) || c.postMessage(b)
        }, gvb = function (a, b, c, d) {
            var e = this;
            this.Z = a; this.W = b; this.visibility = c; this.L = d; this.G = this.N = this.K = this.C = this.j = !1; this.D = new g.cv(function () { e.ZJ() });
            this.Bd = {
                uW: function () { return e.B },
                ZJ: function () { e.ZJ() },
                Tlb: function () { return e.D }
            };
            this.visibility.subscribe("visibilitystatechange", function () { e.og() })
        }, hvb = function (a) {
            if (!a.C && !a.j) {
                var b = $ub();
                if (b) { a.C = !0; var c = g.sD("OfflineLockManager"); b.request("woffle_orchestration_leader:" + c, {}, function () { var d, e, f, h; return g.H(function (l) { switch (l.j) { case 1: return g.Ba(l, 2), a.B = new g.go, a.j = !0, a.C = !1, g.z(l, a.Z(), 4); case 4: return g.z(l, a.B.promise, 5); case 5: g.Ca(l, 0); break; case 2: d = g.Da(l), (null == (f = (e = a).L) ? 0 : f.call(e, "wo_relinquish_leadership_on_lock_request_error")) || a.ZJ(), d instanceof Error && (h = d, h.args = [{ name: "WoLockManagerError", DJ: d.name }], g.VF(h)), g.Aa(l) } }) }) }
            }
        }, ivb = function (a) {
            a.j && (a.G =
                !0, l7(a))
        }, jvb = function (a, b) { a.j && (a.K = b, l7(a)) }, kvb = function (a, b) { a.j && (a.N = b, l7(a)) }, l7 = function (a) { a.N && a.K && a.G && a.visibility.isBackground() ? g.dv(a.D, 6E4) : a.D.stop() }, lvb = function (a) {
            var b;
            a.offlineDeleteReason = null != (b = a.offlineDeleteReason) ? b : "OFFLINE_DELETE_REASON_UNKNOWN"; var c; a.offlineModeType = null != (c = a.offlineModeType) ? c : "OFFLINE_NOW"; g.DD("offlineDeleteEvent", a)
        }, m7 = function (a, b) {
            var c = b.yl, d = b.offlineModeType;
            a.encryptedVideoId = b.videoId; a.cotn = null == c ? void 0 : c.cotn; a.offlineabilityFormatType = null == c ? void 0 : c.maximumDownloadQuality; var e; a.isRefresh = null != (e = null == c ? void 0 : c.isRefresh) ? e : !1; var f; a.softErrorCount = null != (f = null == c ? void 0 : c.transferRetryCount) ? f : 0; a.offlineModeType = null != d ? d : "OFFLINE_NOW"; ("TRANSFER_STATUS_TYPE_UNKNOWN" === a.transferStatusType && "UNKNOWN_STATUS_TYPE" === a.statusType || !a.transferStatusType && !a.statusType) && g.WF(Error("Woffle unknown transfer status")); g.DD("offlineTransferStatusChanged",
                a)
        }, mvb = function (a, b, c, d) {
            d = {
                transferStatusType: "TRANSFER_STATUS_TYPE_PROCESSING",
                statusType: "OFFLINING_STARTED", transferFirstStarted: !!d
            }; b && c && (b = Math.floor(b / 1024).toFixed(), c = Math.floor(c / 1024).toFixed(), d.alreadyDownloadedKbytes = b, d.totalFetchedKbytes = b, d.totalContentKbytes = c); m7(d, a)
        }, nvb = function (a) {
            m7({
                transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_USER_PAUSE",
                statusType: "SUSPENDED"
            }, a)
        }, ovb = function (a) {
            switch (a) {
                case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE": return "OFFLINE_DATABASE_ERROR";
                case "TRANSFER_FAILURE_REASON_PLAYABILITY": return "NOT_PLAYABLE"; case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES": return "TOO_MANY_RETRIES"; case "TRANSFER_FAILURE_REASON_INTERNAL": return "OFFLINE_DOWNLOAD_CONTROLLER_ERROR"; case "TRANSFER_FAILURE_REASON_STREAM_MISSING": return "STREAM_VERIFICATION_FAILED"; case "TRANSFER_FAILURE_REASON_SERVER": case "TRANSFER_FAILURE_REASON_SERVER_PROPERTY_MISSING": return "OFFLINE_REQUEST_FAILURE"; case "TRANSFER_FAILURE_REASON_NETWORK": return "OFFLINE_NETWORK_ERROR"; default: return "UNKNOWN_FAILURE_REASON"
            }
        },
        n7 = function (a) {
            var b, c, d;
            return 0 < (null != (d = null == (b = a.actionMetadata) ? void 0 : null == (c = b.retryScheduleIntervalsInSeconds) ? void 0 : c.length) ? d : 0)
        }, o7 = function (a) { return "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === a.actionType && !!a.entityKey }, p7 = function (a) { return "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === a.actionType && !!a.entityKey }, q7 = function (a) { return "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === a.actionType && !!a.entityKey }, r7 = function (a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f, h, l, m, n, p; return g.H(function (q) {
                if (1 == q.j) return f = g.gP(a, b), h = g.gP(a, "downloadStatusEntity"), g.z(q, a7(c, { mode: "readonly", Tb: !0 }, function (r) { return g.PD.all([U6(r, f, b), U6(r, h, "downloadStatusEntity")]) }), 2);
                l = q.B; m = l.length ? l[0] : void 0; if (!m) return q.La(0); n = pvb; if (p = 1 < l.length ? l[1] : void 0) { if ("DOWNLOAD_STATE_USER_DELETED" === p.downloadState && !e) return q.return(); p.downloadState = d } else p = { key: h, downloadState: d }; g.hG(m, n, p); return g.z(q, a7(c, { mode: "readwrite", Tb: !0 }, function (r) { return g.PD.all([X6(r, m, b), X6(r, p, "downloadStatusEntity")]) }), 0)
            })
        }, s7 = function (a, b) { return a.actionType === b.actionType && a.entityKey === b.entityKey }, t7 = function (a, b) {
            if (a && "TRANSFER_STATE_COMPLETE" !== a.transferState && "TRANSFER_STATE_FAILED" !==
                a.transferState) {
                    var c = g.fP(a.key).entityId;
                m7({ transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_BY_USER", statusType: "CANCELLED" }, { videoId: c, yl: a, offlineModeType: b })
            }
        }, u7 = function (a) {
            if (!a || !a.thumbnails) return [];
            var b = []; a = g.u(a.thumbnails); for (var c = a.next(); !c.done; c = a.next())c = c.value, c.url && b.push(c.url); return b
        }, qvb = function (a, b, c) {
            c = void 0 === c ? [] : c;
            var d, e, f, h, l, m, n, p, q, r, t, v, x; return g.H(function (B) { if (1 == B.j) return c.length ? g.z(B, d7(a, b), 2) : B.return([]); d = B.B; e = new Set; f = g.u(d); for (h = f.next(); !h.done; h = f.next())if (l = h.value, m = l.id || l.key) n = g.fP(m).entityId, e.add(n); p = []; q = g.u(c); for (r = q.next(); !r.done; r = q.next())t = r.value, v = t.offlineVideoData, x = void 0, (null == (x = v) ? 0 : x.videoId) && !e.has(v.videoId) && p.push(t); return B.return(p) })
        }, rvb = function (a, b, c) {
            return new g.rT(a, {
                cotn: b,
                raw_player_response: c, download_media: !0, start: Infinity, disable_watch_next: !0
            })
        }, svb = function () {
            return {
                priority: 1,
                retryScheduleIntervalsInSeconds: [1, 2, 4]
            }
        }, v7 = function (a, b, c, d, e, f, h, l, m, n, p) {
            this.entityType = a;
            this.actionId = b; this.action = c; this.parentActionId = d; this.rootActionId = void 0 === e ? b : e; this.childActionIds = f; this.prereqActionId = h; this.postreqActionIds = l; this.hasChildActionFailed = n; this.retryScheduleIndex = 0; this.j = p || Date.now(); this.retryScheduleIndex = m || 0
        }, w7 = function (a) {
            if (!a.key) throw Error("Entity key is required.");
            if (!a.actionProto) throw Error("OfflineOrchestrationAction is required."); var b = g.fP(a.key), c = g.fP(a.actionProto.entityKey); return new v7(c.entityType, b.entityId, a.actionProto, a.parentActionId, a.rootActionId, a.childActionIds, a.prereqActionId, a.postreqActionIds, a.retryScheduleIndex, a.hasChildActionFailed, 1E3 * Number(a.enqueueTimeSec))
        }, x7 = function (a) {
            return {
                key: g.gP(a.actionId, "offlineOrchestrationActionWrapperEntity"),
                actionProto: a.action, parentActionId: a.parentActionId, rootActionId: a.rootActionId, childActionIds: a.childActionIds, prereqActionId: a.prereqActionId, postreqActionIds: a.postreqActionIds, retryScheduleIndex: a.retryScheduleIndex, hasChildActionFailed: a.hasChildActionFailed, enqueueTimeSec: (a.j / 1E3).toFixed()
            }
        }, tvb = function () {
            var a;
            return g.H(function (b) { return 1 == b.j ? g.z(b, evb(), 2) : (a = b.B) ? b.return(a.delete("yt-player-local-img")) : b.return(!0) })
        }, y7 = function (a) {
            var b, c;
            return g.H(function (d) { if (1 == d.j) return g.z(d, evb(), 2); if (3 != d.j) { b = d.B; if (!b) throw Error("Cache API not supported"); return a.length ? g.z(d, b.open("yt-player-local-img"), 3) : d.return() } c = d.B; return g.z(d, Promise.all(a.map(function (e) { return c.delete(e) })), 0) })
        }, z7 = function (a) {
            var b, c;
            return g.H(function (d) { if (1 == d.j) return g.z(d, evb(), 2); if (3 != d.j) { b = d.B; if (!b) throw Error("Cache API not supported"); return a.length ? g.z(d, b.open("yt-player-local-img"), 3) : d.return() } c = d.B; return g.z(d, c.addAll(a), 0) })
        }, A7 = function (a, b, c, d, e) {
            var f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb;
            return g.H(function (Qa) {
                switch (Qa.j) {
                    case 1: return f = g.gP(a, "mainVideoEntity"), h = g.gP(a, "ytMainChannelEntity"), l = g.gP(a, "transfer"), m = g.gP(a, "videoDownloadContextEntity"), g.z(Qa, a7(b, { mode: "readonly", Tb: !0 }, function (Xa) { return g.PD.all([U6(Xa, f, "mainVideoEntity"), U6(Xa, h, "ytMainChannelEntity"), U6(Xa, l, "transfer"), U6(Xa, m, "videoDownloadContextEntity"), V6(Xa, "ytMainChannelEntity"), V6(Xa, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: n = Qa.B; p = g.u(n); q = p.next().value; r = p.next().value; t = p.next().value; v = p.next().value; x = p.next().value; B = p.next().value; E = q; F = r; G = t; P = v; Q = x; R = B; if (!E && !F) { Qa.La(3); break } ha = E ? u7(E.thumbnail) : []; if (!F) { wa = []; Qa.La(4); break } return g.z(Qa, uvb(F, Q), 5); case 5: wa = Qa.B; case 4: return ua = wa, g.z(Qa, y7(ha.concat(ua)), 3); case 3: ma = []; sa = g.gP(a, "downloadStatusEntity"); da = g.u(R); for (ba = da.next(); !ba.done; ba = da.next())La = ba.value, y = g.fP(La.key).entityId, Z = w7(La), Ta = g.fP(Z.action.entityKey).entityId, y !== a &&
                        Ta !== a || s7(c, La.actionProto) || ma.push(La.key); return g.z(Qa, a7(b, { mode: "readwrite", Tb: !0 }, function (Xa) {
                            var Za = ma.map(function (rb) { return Y6(Xa, rb) });
                            Za.push(Y6(Xa, f, { Wu: !0 })); Za.push(Y6(Xa, sa, { Wu: !0 })); return g.PD.all(Za)
                        }), 7);
                    case 7: nb = null == (db = P) ? void 0 : db.offlineModeType, e && (lvb(e), e.offlineModeType && (nb = e.offlineModeType)), t7(G, nb), k7(d, { entityKey: f, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }), g.Aa(Qa)
                }
            })
        }, xvb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb, Qa, Xa, Za, rb, ib, A, C, D, J, K, aa, qa, ia, L, X, ya, xa, ab;
            return g.H(function (Wa) {
                switch (Wa.j) {
                    case 1: return e = g.gP(a, "mainPlaylistEntity"), f = g.gP(a, "ytMainChannelEntity"), g.z(Wa, a7(b, { mode: "readonly", Tb: !0 }, function (xb) { return g.PD.all([U6(xb, e, "mainPlaylistEntity"), U6(xb, f, "ytMainChannelEntity"), V6(xb, "mainPlaylistEntity"), V6(xb, "mainDownloadsListEntity"), V6(xb, "ytMainChannelEntity"), V6(xb, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: h = Wa.B; l = g.u(h); m = l.next().value; n = l.next().value; p = l.next().value; q = l.next().value; r = l.next().value; t = l.next().value; v = m; x = n; B = p; E = q; F = r; G = t; if (!v && !x) { Wa.La(3); break } P = v ? vvb(v) : []; if (!x) { Q = []; Wa.La(4); break } return g.z(Wa, uvb(x, F), 5); case 5: Q = Wa.B; case 4: return R = Q, g.z(Wa, y7(P.concat(R)), 3); case 3: ha = []; wa = new Map; if (!v) { Wa.La(7); break } return g.z(Wa, wvb(v, B, E), 8); case 8: ha = Wa.B; ua = g.u(ha); for (ma = ua.next(); !ma.done; ma = ua.next())sa = ma.value, wa.set(sa, { videoId: sa, playlistId: a, offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_DELETE" });
                        return g.z(Wa, a7(b, { mode: "readonly", Tb: !0 }, function (xb) { return g.PD.all([V6(xb, "transfer"), V6(xb, "videoDownloadContextEntity")]) }), 9);
                    case 9: da = Wa.B; ba = g.u(da); La = ba.next().value; y = ba.next().value; Z = La; Ta = y; db = g.u(Z); for (nb = db.next(); !nb.done; nb = db.next())Qa = nb.value, Xa = g.fP(Qa.key).entityId, (Za = wa.get(Xa)) && Qa && (Za.cotn = Qa.cotn); rb = g.u(Ta); for (ib = rb.next(); !ib.done; ib = rb.next())A = ib.value, C = g.fP(A.key).entityId, (D = wa.get(C)) && A && (D.offlineModeType = A.offlineModeType); case 7: J = []; K = g.u(G); for (aa = K.next(); !aa.done; aa = K.next())qa = aa.value, ia = g.fP(qa.key).entityId, L = w7(qa), ia !== a && L.rootActionId !== a || s7(c, qa.actionProto) || J.push(qa.key);
                        X = g.gP(a, "mainPlaylistEntity"); return g.z(Wa, a7(b, { mode: "readwrite", Tb: !0 }, function (xb) {
                            var Qb = J.map(function (eb) { return Y6(xb, eb) });
                            Qb.push(Y6(xb, X, { Wu: !0 })); return g.PD.all(Qb)
                        }), 10);
                    case 10: if (!v) { Wa.La(0); break } ha.reverse(); if (!ha) { Wa.La(0); break } ya = g.u(ha); xa = ya.next(); case 13: if (xa.done) { Wa.La(0); break } ab = xa.value; return g.z(Wa, A7(ab, b, c, d, wa.get(ab)), 14); case 14: xa = ya.next(), Wa.La(13)
                }
            })
        }, zvb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r;
            return g.H(function (t) {
                if (1 == t.j) return e = g.gP("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), f = new Map, g.z(t, a7(a, { mode: "readwrite", Tb: !0 }, function (v) {
                    var x = V6(v, "transfer"), B = V6(v, "offlineOrchestrationActionWrapperEntity"), E = V6(v, "videoDownloadContextEntity"), F = U6(v, e, "mainDownloadsListEntity"); return g.PD.all([x, B, E, F]).then(function (G) {
                        G = g.u(G); var P = G.next().value, Q = G.next().value, R = G.next().value, ha = G.next().value; G = yvb.map(function (sa) { return uub(v, sa) });
                        Q = g.u(Q); for (var wa = Q.next(); !wa.done; wa = Q.next()) { wa = wa.value; var ua = "mainVideoEntity" === g.fP(wa.actionProto.entityKey).entityType, ma = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === wa.actionProto.actionType; s7(b, wa.actionProto) || ua && (!ua || ma) || G.push(Y6(v, wa.key, { Wu: !0 })) } ha && (ha.downloads = [], G.push(X6(v, ha, "mainDownloadsListEntity"))); if (R) for (R = g.u(R), ha = R.next(); !ha.done; ha = R.next())ha = ha.value, Q = g.fP(ha.key).entityId, Q = g.gP(Q, "transfer"), f.set(Q, ha.offlineModeType); return g.PD.all(G).then(function () { return P })
                    })
                }),
                    2);
                h = t.B; l = g.u(h); for (m = l.next(); !m.done; m = l.next())n = m.value, t7(n, f.get(n.key)), p = g.fP(n.key).entityId, q = { videoId: p, offlineDeleteReason: d, cotn: n.cotn, offlineModeType: f.get(n.key) }, lvb(q), r = g.gP(p, "mainVideoEntity"), k7(c, { entityKey: r, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }); return g.z(t, tvb(), 0)
            })
        }, vvb = function (a, b) {
            var c = [];
            if (a.thumbnailStyleData) { a = g.u(a.thumbnailStyleData); for (var d = a.next(); !d.done; d = a.next()) { var e = void 0, f = void 0, h = void 0; c = c.concat(u7(null == (e = d.value) ? void 0 : null == (f = e.value) ? void 0 : null == (h = f.collageThumbnail) ? void 0 : h.coverThumbnail)) } } b = u7(b); return c.concat(b)
        }, wvb = function (a, b, c) {
            var d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua;
            return g.H(function (ma) {
                d = []; e = new Set; if (c.length) for (f = g.u(c), h = f.next(); !h.done; h = f.next())if (l = h.value, m = void 0, null == (m = l.downloads) ? 0 : m.length) for (n = g.u(l.downloads), p = n.next(); !p.done; p = n.next())q = p.value, q.videoItem && (r = g.fP(q.videoItem).entityId, e.add(r)); if (a.videos) {
                    t = g.u(a.videos); for (v = t.next(); !v.done; v = t.next())x = v.value, B = JSON.parse(g.fP(x).entityId), B.videoId && !e.has(B.videoId) && d.push(B.videoId); E = g.u(b); for (F = E.next(); !F.done; F = E.next())if (G = F.value, G.key !== a.key && (P = G.videos)) for (Q =
                        g.u(P), R = Q.next(); !R.done; R = Q.next())ha = R.value, wa = JSON.parse(g.fP(ha).entityId), wa.videoId && (ua = d.indexOf(wa.videoId), -1 !== ua && d.splice(ua, 1))
                } return ma.return(d)
            })
        }, uvb = function (a, b) {
            var c, d, e, f, h, l, m, n;
            return g.H(function (p) { c = u7(a.avatar); d = g.u(b); for (e = d.next(); !e.done; e = d.next())if (f = e.value, f.id !== a.id) for (h = g.u(u7(f.avatar)), l = h.next(); !l.done; l = h.next())m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1); return p.return(c) })
        }, Avb = function (a) {
            var b;
            return g.H(function (c) { b = g.U(a.frameworkUpdates, B7); return a.frameworkUpdates && b ? g.z(c, Hub(b), 0) : c.return() })
        }, Dvb = function (a) {
            var b;
            if (null != (b = a.onResponseReceivedActions) && b.length) { var c; a = null == (c = g.U(g.U(a.onResponseReceivedActions[0], Bvb), Cvb)) ? void 0 : c.actions; if (null != a && a.length) return a }
        }, Fvb = function (a, b) {
            var c;
            return g.H(function (d) { return 1 == d.j ? g.z(d, Evb(a, b), 2) : (c = d.B) ? g.z(d, a7(a, { mode: "readwrite", Tb: !0 }, function (e) { var f = [X6(e, c.mainDownloadsLibraryEntity, "mainDownloadsLibraryEntity")]; c.mainDownloadsListEntity && f.push(X6(e, c.mainDownloadsListEntity, "mainDownloadsListEntity")); return g.PD.all(f) }), 0) : d.La(0) })
        }, Evb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G;
            return g.H(function (P) {
                if (1 == P.j) return c = g.gP("main_downloads_library_id", "mainDownloadsLibraryEntity"), d = g.gP("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(P, a7(a, { mode: "readonly", Tb: !0 }, function (Q) { return g.PD.all([U6(Q, c, "mainDownloadsLibraryEntity"), U6(Q, d, "mainDownloadsListEntity")]) }), 2);
                e = P.B; f = g.u(e); h = f.next().value; l = f.next().value; m = h; n = l; m || (m = { id: c }); p = g.u(b); for (q = p.next(); !q.done; q = p.next())if (r = q.value, r === C7) { if (m.smartDownloadsList) return P.return(); m.smartDownloadsList = r } else if (t = g.fP(r).entityType, v = {}, "mainPlaylistEntity" === t ? v.playlistItem = r : "mainVideoEntity" === t && (v.videoItem = r), !g.nd(v)) {
                    x = void 0; if (null == (x = n) ? 0 : x.downloads) { B = !1; E = g.u(n.downloads); for (F = E.next(); !F.done; F = E.next())if (G = F.value, G.playlistItem === r || G.videoItem === r) { B = !0; break } B || n.downloads.push(v) } else n =
                        { id: d, downloads: [v] }; m.downloadsList = d
                } return P.return({ mainDownloadsLibraryEntity: m, mainDownloadsListEntity: n })
            })
        }, Gvb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B;
            return g.H(function (E) {
                if (1 == E.j) return c = g.gP("main_downloads_library_id", "mainDownloadsLibraryEntity"), d = g.gP("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(E, a7(a, { mode: "readonly", Tb: !0 }, function (F) { return g.PD.all([U6(F, c, "mainDownloadsLibraryEntity"), U6(F, d, "mainDownloadsListEntity"), U6(F, C7, "mainDownloadsListEntity")]) }), 2);
                e = E.B; f = g.u(e); h = f.next().value; l = f.next().value; m = f.next().value; n = h; p = l; q = m; if (!n) return E.La(0); if (b === C7 && (null == (r = q) ? 0 : r.downloads)) q.downloads = []; else if (null == (t = p) ? 0 : t.downloads) for (v = g.fP(b).entityType, x = 0; x < p.downloads.length; x++)if (B = p.downloads[x], "mainVideoEntity" === v && B.videoItem === b) { p.downloads.splice(x, 1); break } else if ("mainPlaylistEntity" === v && B.playlistItem === b) { p.downloads.splice(x, 1); break } return g.z(E, a7(a, { mode: "readwrite", Tb: !0 }, function (F) {
                    var G = [X6(F, n, "mainDownloadsLibraryEntity")];
                    p && G.push(X6(F, p, "mainDownloadsListEntity")); q && G.push(X6(F, q, "mainDownloadsListEntity")); return g.PD.all(G)
                }), 0)
            })
        }, Hvb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r;
            return g.H(function (t) {
                if (1 == t.j) return c = g.gP(b, "transfer"), d = g.gP(b, "videoDownloadContextEntity"), g.z(t, a7(a, { mode: "readonly", Tb: !0 }, function (v) { return g.PD.all([U6(v, c, "transfer"), U6(v, d, "videoDownloadContextEntity")]) }), 2);
                e = t.B; f = g.u(e); h = f.next().value; l = f.next().value; m = h; n = l; r = { videoId: b, cotn: null == (p = m) ? void 0 : p.cotn, offlineModeType: null == (q = n) ? void 0 : q.offlineModeType }; return t.return(r)
            })
        }, D7 = function (a) { this.j = a }, Ivb = function (a, b) {
            var c, d, e, f, h, l;
            return g.H(function (m) { switch (m.j) { case 1: c = new Map, d = g.u(b), e = d.next(); case 2: if (e.done) { m.La(4); break } f = e.value; h = c; l = h.set; return g.z(m, a.B(f), 5); case 5: l.call(h, f, m.B); e = d.next(); m.La(2); break; case 4: return m.return(c) } })
        }, E7 = function (a, b, c, d, e, f) {
            b = g.gP(b, c);
            d = Object.assign({}, f, { priority: d, retryScheduleIntervalsInSeconds: e }); return { actionType: a, entityKey: b, actionMetadata: d }
        }, F7 = function (a, b, c, d, e, f) {
            this.status = a;
            this.j = b; this.D = c; this.B = d; this.C = e; this.downloadState = f
        }, Jvb = function (a, b, c) {
            this.j = a;
            this.X = b; this.C = c
        }, Nvb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q;
            return g.H(function (r) {
                switch (r.j) {
                    case 1: return c = b.entityKey, e = null == (d = g.U(b.actionMetadata, G7)) ? void 0 : d.isEnqueuedForExpiredStreamUrlRefetch, g.Ba(r, 2), f = void 0, g.z(r, Kvb(a, b), 4); case 4: f = r.B; var t = (t = g.U(b.actionMetadata, G7)) ? { maximumDownloadQuality: t.maximumDownloadQuality } : void 0; return g.z(r, Lvb(a, c, { isEnqueuedForExpiredStreamUrlRefetch: e, D0: t, offlineSourceData: f }), 5); case 5: return h = r.B, !h || 0 === (null == (l = h.errorMetadata) ? void 0 : l.status) && a.X.L("html5_pde_downloads_failure") ? (m = n7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" :
                        "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", r.return(H7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", m, "DOWNLOAD_STATE_FAILED"))) : g.z(r, Mvb(a, h, b), 6); case 6: return r.return(H7(b, !0, h.orchestrationActions)); case 2: return n = g.Da(r), p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.KD && "QUOTA_EXCEEDED" === n.type && (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                            i7("PDE handleAdd error"), r.return(H7(b, !1, void 0, p, q, "DOWNLOAD_STATE_FAILED"))
                }
            })
        }, Ovb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P;
            return g.H(function (Q) {
                switch (Q.j) {
                    case 1: return c = b.entityKey, g.z(Q, a7(a.j, { mode: "readonly", Tb: !0 }, function (R) { var ha = U6(R, c, "playbackData"), wa = U6(R, g.gP(g.fP(b.entityKey).entityId, "offlineVideoPolicy"), "offlineVideoPolicy"); R = U6(R, g.gP(g.fP(b.entityKey).entityId, "transfer"), "transfer"); return g.PD.all([ha, wa, R]) }), 2);
                    case 2: d = Q.B; e = g.u(d); f = e.next().value; h = e.next().value; l = e.next().value; m = f; n = h; p = l; if (!m || !n) return Q.return(H7(b, !0)); q = { lastPlayerResponseTimestampSeconds: m.playerResponseTimestamp, offlineToken: n.offlineToken }; r = {}; if (null == (t = p) ? 0 : t.maximumDownloadQuality) r.maximumDownloadQuality = p.maximumDownloadQuality; g.Ba(Q, 3); v = void 0; return g.z(Q, Kvb(a, b), 5); case 5: return v = Q.B, g.z(Q, Lvb(a, c, { refreshData: q, D0: r, offlineSourceData: v }), 6); case 6: return x = Q.B, !x || 0 === (null == (B = x.errorMetadata) ? void 0 : B.status) &&
                        a.X.L("html5_pde_downloads_failure") ? (E = n7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", Q.return(H7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", E, "DOWNLOAD_STATE_FAILED"))) : g.z(Q, Mvb(a, x, b), 7); case 7: return Q.return(H7(b, !0, x.orchestrationActions)); case 3: return F = g.Da(Q), G = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", P = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED",
                            F instanceof g.KD && "QUOTA_EXCEEDED" === F.type && (G = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", P = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Q.return(H7(b, !1, void 0, G, P, "DOWNLOAD_STATE_FAILED"))
                }
            })
        }, Kvb = function (a, b) {
            var c, d, e, f;
            return g.H(function (h) { if (1 == h.j) return c = g.fP(b.entityKey).entityId, d = g.gP(c, "videoDownloadContextEntity"), g.z(h, c7(a.j, d, "videoDownloadContextEntity"), 2); e = h.B; return null != (f = e) && f.offlineModeType ? h.return({ offlineModeType: e.offlineModeType }) : h.return(void 0) })
        }, Lvb = function (a, b, c) {
            var d, e, f;
            return g.H(function (h) { d = g.FI(); e = Sub(b, a.X, c.refreshData, c.isEnqueuedForExpiredStreamUrlRefetch, c.D0, c.offlineSourceData); f = g.KH(Pvb); return h.return(g.xI(d, e, f).then(function (l) { return l })) })
        }, Mvb = function (a, b, c) {
            var d, e, f, h, l;
            return g.H(function (m) {
                if (1 == m.j) { if (!b.frameworkUpdates || !g.U(b.frameworkUpdates, B7)) return m.return(); if (!(g.U(b.frameworkUpdates, B7).mutations && 0 < g.U(b.frameworkUpdates, B7).mutations.length && "ENTITY_MUTATION_TYPE_DELETE" === g.U(b.frameworkUpdates, B7).mutations[0].type)) return m.La(2); d = g.fP(g.U(b.frameworkUpdates, B7).mutations[0].entityKey).entityId; return g.z(m, Hvb(a.j, d), 3) } if (2 != m.j) {
                    e = m.B; f = g.U(c.actionMetadata, G7); if (l = null == (h = f) ? void 0 : h.playlistId) e.playlistId = l; e.offlineDeleteReason = "OFFLINE_DELETE_REASON_UNKNOWN";
                    return g.z(m, A7(d, a.j, c, a.C, e), 2)
                } return g.z(m, Hub(g.U(b.frameworkUpdates, B7)), 0)
            })
        }, H7 = function (a, b, c, d, e, f) {
            for (var h = n7(a), l = g.u(c || []), m = l.next(); !m.done; m = l.next())if (m = m.value, m.actionMetadata) {
                var n = void 0;
                m.actionMetadata.priority = (null == (n = a.actionMetadata) ? void 0 : n.priority) || 1
            } return new F7(b ? "OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" : "OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", h, c, d, e, f)
        }, Qvb = function (a, b) {
            this.j = a;
            this.X = b
        }, Svb = function (a, b) {
            var c, d;
            return g.H(function (e) {
                switch (e.j) {
                    case 1: return c = n7(b), g.z(e, c7(a.j, b.entityKey, "transfer"), 2); case 2: if (d = e.B) return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.Ba(e, 3); return g.z(e, Rvb(a, b), 5); case 5: g.Ca(e, 4); break; case 3: return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 4: return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                        c))
                }
            })
        }, Tvb = function (a, b) {
            var c, d;
            return g.H(function (e) {
                switch (e.j) {
                    case 1: return c = n7(b), g.z(e, c7(a.j, b.entityKey, "transfer"), 2); case 2: d = e.B; if (!d || "TRANSFER_STATE_COMPLETE" !== d.transferState) return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.Ba(e, 3); return g.z(e, Rvb(a, b, !0), 5); case 5: g.Ca(e, 4); break; case 3: return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                    case 4: return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        }, Uvb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q;
            return g.H(function (r) {
                switch (r.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey).entityId, g.z(r, a7(a.j, { mode: "readonly", Tb: !0 }, function (t) { var v = U6(t, b.entityKey, "transfer"); t = U6(t, g.gP(d, "videoDownloadContextEntity"), "videoDownloadContextEntity"); return g.PD.all([v, t]) }), 2);
                    case 2: e = r.B; f = g.u(e); h = f.next().value; l = f.next().value; m = h; n = l; if (!m || "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH" !== m.transferState) return r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.Ba(r, 3); m.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE"; return g.z(r, b7(a.j, m, "transfer"), 5); case 5: p = g.fP(m.key).entityId; m7({ transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_PLAYER_RESPONSE_REFRESH" }, { videoId: p, yl: m, offlineModeType: null == (q = n) ? void 0 : q.offlineModeType }); g.Ca(r,
                        4); break; case 3: return g.Da(r), r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 4: return r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        }, Rvb = function (a, b, c) {
            c = void 0 === c ? !1 : c;
            var d, e, f, h, l, m, n, p, q, r, t, v, x, B, E; return g.H(function (F) {
                if (1 == F.j) return d = g.U(b.actionMetadata, Vvb), e = g.fP(b.entityKey).entityId, f = g.gP(e, "downloadStatusEntity"), g.z(F, a7(a.j, { mode: "readonly", Tb: !0 }, function (G) { var P = U6(G, f, "downloadStatusEntity"); G = U6(G, g.gP(e, "videoDownloadContextEntity"), "videoDownloadContextEntity"); return g.PD.all([P, G]) }), 2);
                if (3 != F.j) return h = F.B, l = g.u(h), m = l.next().value, n = l.next().value, p = m, q = n, r = "TRANSFER_STATE_TRANSFER_IN_QUEUE", "DOWNLOAD_STATE_USER_DELETED" === (null == (t = p) ? void 0 : t.downloadState) && (r = "TRANSFER_STATE_PAUSED_BY_USER"), B = { key: b.entityKey, transferState: r, cotn: g.hF(16), enqueuedTimestampMs: Date.now().toString(), maximumDownloadQuality: null == (v = d) ? void 0 : v.maximumDownloadQuality, preferredAudioTrack: null == (x = d) ? void 0 : x.preferredAudioTrack, transferRetryCount: 0, isRefresh: c, hasLoggedFirstStarted: !1 }, g.z(F,
                    a7(a.j, { mode: "readwrite", Tb: !0 }, function (G) { var P = []; c && P.push(Y6(G, g.gP(e, "offlineVideoStreams"))); P.push(X6(G, B, "transfer")); return g.PD.all(P) }), 3);
                m7({ transferStatusType: "TRANSFER_STATUS_TYPE_ENQUEUED", statusType: "ADDED_TO_QUEUE" }, { videoId: e, yl: B, offlineModeType: null == (E = q) ? void 0 : E.offlineModeType }); g.Aa(F)
            })
        }, Xvb = function (a, b, c, d) {
            if (!a.action.entityKey) throw Error("entityKey is missing.");
            var e = g.fP(a.action.entityKey); e = { entityType: e.d6, entityId: e.entityId, offlineOrchestrationActionType: a.action.actionType, orchestrationAction: { orchestrationActionId: a.actionId } }; b && (e.offlineOrchestrationActionResult = b.status, e.isRetryable = c ? !1 : b.j, b.C && (e.offlineOrchestrationFailureReason = Wvb(b.C, e.isRetryable))); var f, h; if (null == (f = a.action.actionMetadata) ? 0 : null == (h = f.offlineLoggingData) ? 0 : h.offlineModeType) e.offlineModeType = a.action.actionMetadata.offlineLoggingData.offlineModeType; d && (e.additionalOrchestrationActions =
                d.map(function (l) { return { orchestrationActionId: l.actionId } }));
            return e
        }, Wvb = function (a, b) { return "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" !== a || b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR" === a && b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : a : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR" }, Yvb = function (a, b) {
            var c = { offlineOrchestrationContext: Xvb(a) };
            b = Wub(b, c); Xub(Vub(), b, a.rootActionId)
        }, Zvb = function (a, b, c, d) {
            d = void 0 === d ? [] : d;
            b = { offlineOrchestrationContext: Xvb(a, b, c, d) }; b = Wub(3, b); Xub(Vub(), b, a.rootActionId)
        }, $vb = function () { this.actions = [] }, awb = function (a, b) {
            b = g.u(b);
            for (var c = b.next(); !c.done; c = b.next())c = c.value, Yvb(c, 1), a.actions.push(c); a.actions.sort(a.j)
        }, bwb = function (a, b) { if (b) for (var c = 0; c < a.actions.length; c++)a.actions[c].rootActionId === b && a.actions[c].actionId !== b && (a.actions.splice(c, 1), c--) }, cwb = function (a, b) {
            a = g.u(a.actions);
            for (var c = a.next(); !c.done; c = a.next())if (c.value.actionId === b) return !0; return !1
        }, I7 = function (a, b, c, d, e) {
            g.I.call(this);
            var f = this; this.B = a; this.Ba = b; this.ma = c; this.N = d; this.X = e; this.j = new $vb; this.K = new g.QE; this.C = new g.cv(function () { f.retry() });
            this.Z = NaN; this.G = !1; this.Bd = {
                Rlb: function () { return f.j },
                yW: function () { return f.K },
                Wlb: function () { return f.C },
                retry: function () { return f.retry() }
            };
            g.M(this, this.C); this.W = Aub(this.B, this.ra.bind(this))
        }, fwb = function (a, b, c, d, e) {
            var f;
            return g.H(function (h) { if (1 == h.j) return f = new I7(a, b, c, d, e), g.z(h, dwb(f), 2); ewb(f); return h.return(f) })
        }, ewb = function (a) {
            var b = a.j.actions[0];
            return a.D ? ("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === (null == b ? void 0 : b.action.actionType) && "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" !== a.D[0].action.actionType && (a.G = !0), Promise.resolve()) : gwb(a)
        }, gwb = function (a) {
            var b, c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E;
            return g.H(function (F) {
                switch (F.j) {
                    case 1: if (a.D) throw Error("Already processing an action"); if (a.isDisposed()) return F.return(); b = a.j.actions.shift(); jvb(a.ma, !b); if (void 0 === b) return F.return(); "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === b.action.actionType && "DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS" === b.actionId && bwb(a.j, b.actionId); c = ""; "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === b.action.actionType && b.rootActionId === b.actionId && (c = b.actionId); d = [b]; a.D = d; if (e = a.Ba[b.entityType]) { F.La(2); break } a.D =
                        void 0; return g.z(F, gwb(a), 3); case 3: return F.return(); case 2: f = g.u(d); for (h = f.next(); !h.done; h = f.next())l = h.value, Yvb(l, 2); g.Ba(F, 4, 5); return g.z(F, Ivb(e, d.map(function (G) { return G.action })), 7);
                    case 7: m = F.B, n = g.u(d), p = n.next(); case 8: if (p.done) { F.La(10); break } q = p.value; r = m.get(q.action); return g.z(F, hwb(a, q, r), 9); case 9: p = n.next(); F.La(8); break; case 10: bwb(a.j, c); case 5: g.Ea(F); a.D = void 0; g.Fa(F, 6); break; case 4: return t = g.Da(F), i7("Orchestration error", t), g.Ba(F, 12), g.z(F, iwb(a, d), 14); case 14: g.Ca(F, 5); break; case 12: v = g.Da(F); i7("Orchestration retry error", v); x = g.u(d); for (B = x.next(); !B.done; B = x.next())E = B.value, 3 > E.retryScheduleIndex && awb(a.j, [E]); F.La(5); break; case 6: return g.z(F, gwb(a),
                        0)
                }
            })
        }, hwb = function (a, b, c) {
            var d, e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function (x) {
                switch (x.j) {
                    case 1: d = 3 === b.retryScheduleIndex + 2; if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" === c.status) { x.La(2); break } if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE" !== c.status) { x.La(0); break } Zvb(b, c, d); if (c.j && 3 > b.retryScheduleIndex + 1) return g.z(x, iwb(a, [b]), 0); f = (null == (e = c) ? 0 : e.B) ? c.B : "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN"; h = { entityKey: b.action.entityKey, failureReason: f }; l = void 0; g.FS(a.X) ? l = "mainVideoDownloadStateEntity" : g.BH(a.X) && (l = "musicTrackDownloadMetadataEntity");
                        if (!l || !c.downloadState) { x.La(7); break } m = g.fP(b.action.entityKey).entityId; return g.z(x, r7(m, l, a.B, c.downloadState), 7); case 7: return k7(a.N, h), i7("Orchestration result is not retryable, deleting action"), g.z(x, Cub(a.B, x7(b).key), 0); case 2: n = void 0; try { n = null == (p = c.D) ? void 0 : p.map(function (B) { return a.createAction(B, b) }) } catch (B) {
                            return Zvb(b, c, d), q = {
                                entityKey: b.action.entityKey,
                                failureReason: "OFFLINE_OPERATION_FAILURE_REASON_UNSUPPORTED_ENTITY_FAILED"
                            }, k7(a.N, q), i7("Orchestration subactions creation error", B), x.return()
                        } Zvb(b, c, d, n); if (!n) { x.La(11); break } r = n.map(function (B) { return x7(B) });
                        t = 0; case 12: if (!(t < n.length) || a.G) { x.La(14); break } return g.z(x, a7(a.B, { mode: "readwrite", Tb: !0 }, function (B) { var E = []; E.push(rub(B, r.slice(t, t + 10), "offlineOrchestrationActionWrapperEntity")); return g.PD.all(E) }), 15);
                    case 15: t += 10; x.La(12); break; case 14: if (a.G) return a.G = !1, x.return(); case 11: return v = x7(b), g.z(x, Cub(a.B, v.key), 16); case 16: Yvb(b, 4), g.Aa(x)
                }
            })
        }, mwb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t;
            return g.H(function (v) {
                c = []; d = Infinity; e = 4E3; f = g.u(b); for (h = f.next(); !h.done; h = f.next())l = h.value, m = Number(l.enqueueTimeSec), n = jwb(m), p = l.retryScheduleIndex, q = null != p && 0 < p, 0 < n && q ? (d = Math.min(d, m), e = Math.min(n, e)) : c.push(l); isFinite(d) && (!a.C.isActive() || d < a.Z) && (a.Z = d, a.C.start(e)); a.K.Nh() || (r = c.length, c = c.filter(function (x) { var B; x = (null == (B = x.actionProto) ? void 0 : B.actionType) || "OFFLINE_ORCHESTRATION_ACTION_TYPE_UNKNOWN"; return !kwb.includes(x) }), t = c.length < r, !a.C.isActive() && t && a.C.start(1));
                0 < c.length && lwb(a, c); return g.z(v, ewb(a), 0)
            })
        }, owb = function (a) {
            var b, c, d, e, f, h, l;
            return g.H(function (m) { if (1 == m.j) return g.z(m, nwb(a), 2); b = m.B; c = []; d = g.u(b); for (e = d.next(); !e.done; e = d.next())f = e.value, h = g.fP(f.key), l = h.entityId, cwb(a.j, l) || c.push(f); return g.z(m, mwb(a, c), 0) })
        }, jwb = function (a) {
            a = 1E3 * a - Date.now();
            return 4E3 < a ? 4E3 : a
        }, iwb = function (a, b) {
            var c, d, e;
            return g.H(function (f) { c = g.u(b); for (d = c.next(); !d.done; d = c.next()) { e = d.value; var h = void 0, l = void 0, m = (null == (l = e.action) ? void 0 : null == (h = l.actionMetadata) ? void 0 : h.retryScheduleIntervalsInSeconds) || [1, 2, 4]; h = 1; e.retryScheduleIndex < m.length && (h = m[e.retryScheduleIndex]); e.j = 1E3 * h + Date.now(); e.retryScheduleIndex++ } return g.z(f, pwb(a, b), 0) })
        }, dwb = function (a) {
            var b;
            return g.H(function (c) { if (1 == c.j) return g.z(c, d7(a.B, "offlineOrchestrationActionWrapperEntity"), 2); b = c.B; return g.z(c, mwb(a, b), 0) })
        }, lwb = function (a, b) {
            0 !== b.length && b.forEach(function (c) {
                c = w7(c);
                3 > c.retryScheduleIndex && awb(a.j, [c])
            })
        }, nwb = function (a, b) {
            var c;
            return g.H(function (d) { if (1 == d.j) return g.z(d, d7(a.B, "offlineOrchestrationActionWrapperEntity", b), 2); c = d.B; return d.return(c.filter(Iub)) })
        }, pwb = function (a, b) {
            if (0 === b.length) return Promise.resolve([]);
            b = b.map(function (c) { return x7(c) });
            return Bub(a.B, b)
        }, qwb = function () { this.j = void 0 }, swb = function (a, b) {
            var c, d, e, f, h;
            return g.H(function (l) { c = b.videoId; d = b.U(); e = !0; if (b.captionTracks.length) f = Csb(b), a.j = new g.bW(d, b, f); else if (b.Wd) h = g.XSa(b), a.j = new g.fW(d, b.Wd, c, h, b.Nm, b.eventId), e = b.Nm; else return l.return(); return l.return(new Promise(function (m) { var n; null == (n = a.j) || n.Qz(function () { return g.H(function (p) { if (1 == p.j) return g.z(p, rwb(a, c, e), 2); m(); g.Aa(p) }) }) })) })
        }, rwb = function (a, b, c) {
            c = void 0 === c ? !0 : c;
            var d, e, f, h, l, m, n, p; return g.H(function (q) {
                switch (q.j) {
                    case 1: if (!a.j) return q.return(); d = []; e = g.ZV(a.j.B, c); f = []; for (h = { Az: 0 }; h.Az < e.length; h = { Az: h.Az }, h.Az++)l = e[h.Az], m = a.j.Fv(l, "json3"), n = g.vC(m, { withCredentials: !0, format: "RAW" }, 3, 500).then(function (r) { return function (t) { t = { metadata: g.VS(e[r.Az]), trackData: t.xhr.responseText }; f.push(t) } }(h)).xl(function (r) { i7("Caption fetch error", r) }), d.push(n);
                        return g.z(q, Dsb(d), 2); case 2: return g.Ba(q, 3), g.z(q, Mub(b, f), 5); case 5: g.Ca(q, 0); break; case 3: p = g.Da(q), i7("Caption DB transaction error", p), g.Aa(q)
                }
            })
        }, twb = function (a) {
            var b;
            return g.H(function (c) { if (1 == c.j) return g.z(c, Nub(a), 2); b = c.B; return c.return(!!b && 0 < b.length) })
        }, uwb = function (a, b) {
            this.api = a;
            this.j = b; this.logger = new g.PU("woffle"); this.B = !1; this.Bd = { ON: this.ON }; this.logger.debug("Initialized OfflineMediaManager")
        }, vwb = function (a) { return g.H(function (b) { return b.return(Oub(a)) }) }, wwb = function (a) {
            var b;
            return g.H(function (c) { if (1 == c.j) return g.z(c, g.xRa(a), 2); b = c.B; return c.return(b.filter(function (d) { return !!d.url }).map(function (d) { return d.url })) })
        }, J7 = function (a, b) {
            var c = g.fT(b);
            if (1 === c || 0 === c) return Promise.resolve(); (c = xwb(a, b)) && c.stopVideo(); a.C = 0; return vwb(b)
        }, K7 = function (a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !0 : d; var e = "string" === typeof b ? b : b.videoDetails.videoId; 2 === g.fT(e) && ((b = xwb(a, e)) ? b.stopVideo() : a.logger.info(function () { return "Corresponding player for " + e + " not found. Pausing anyway" }), g.gT(e, 2), a.C = 2, c ? ywb(a.j) : d && zwb(a.j))
        }, xwb = function (a, b) {
            var c;
            return (null == (c = a.player) ? void 0 : c.getVideoData().videoId) === b ? a.player : null
        }, Awb = function (a, b, c) {
            b.getPlayerResponse();
            g.gT(b.videoId, 2); a.C = 2; a.B = !1; var d; null == (d = a.player) || d.dispose(); a.player = a.api.Py(9, b); b = {}; g.vG(a.player, (b.localmediachange = a.sJ, b.signatureexpired = a.ZP, b.statechange = a.D9, b), a); var e = a.ON(c); g.xbb(a.player, g.TP(e, e, !0, "m"), !1); a.logger.debug(function () { return "Starting headless playback with quality: " + e });
            g.FY(a.player, !1)
        }, L7 = function (a) {
            g.I.call(this);
            this.j = a; this.B = Aub(this.j, this.C.bind(this))
        }, Bwb = function (a, b) {
            var c, d, e, f, h, l, m;
            return g.H(function (n) {
                switch (n.j) {
                    case 1: if (0 === b.length) return n.return([]); c = b.map(function (p) { return g.gP(p, "transfer") });
                        return g.z(n, d7(a.j, "transfer", c), 2); case 2: d = n.B; e = d.filter(Iub).map(function (p) { return g.fP(p.key).entityId });
                        f = b.filter(function (p) { return -1 === e.indexOf(p) });
                        if (0 === f.length) return n.return([]); h = g.u(f); l = h.next(); case 3: if (l.done) { n.La(5); break } m = l.value; return g.z(n, vwb(m), 4); case 4: l = h.next(); n.La(3); break; case 5: return n.return(f)
                }
            })
        }, Ewb = function (a, b, c, d, e, f) {
            var h, l, m;
            return g.H(function (n) {
                h = "STREAM_TYPE_UNKNOWN"; c.video && c.audio ? (h = "STREAM_TYPE_AUDIO_AND_VIDEO", i7("unexpected stream type")) : c.video && !c.audio ? h = "STREAM_TYPE_VIDEO" : !c.video && c.audio && (h = "STREAM_TYPE_AUDIO"); l = g.gP(b, "offlineVideoStreams"); m = { numBytesDownloaded: e.toFixed(), numTotalBytes: f.toFixed(), streamType: h, streamState: "DOWNLOAD_STREAM_STATE_IN_PROGRESS", formatStreamBytes: JSON.stringify(d), itag: "STREAM_TYPE_AUDIO_AND_VIDEO" === h ? Number(c.itag) : void 0 }; return g.z(n, a7(a, { mode: "readwrite", Tb: !0 },
                    function (p) {
                        var q = U6(p, l, "offlineVideoStreams"), r = U6(p, g.gP(b, "transfer"), "transfer"); return g.PD.all([q, r]).then(function (t) {
                            t = g.u(t); var v = t.next().value; t = t.next().value; if (!t) return Y6(p, l).then(function () { });
                            var x = Cwb(v); v = Dwb(v, d, m, l); var B = X6(p, v, "offlineVideoStreams"); Cwb(v) > x && (t.lastProgressTimeMs = Date.now().toString()); x = [B]; t.offlineVideoStreams || (t.offlineVideoStreams = []); -1 === t.offlineVideoStreams.indexOf(l) && (t.offlineVideoStreams.push(l), x.push(X6(p, t, "transfer"))); return g.PD.all(x)
                        })
                    }), 0)
            })
        }, Fwb = function (a, b) {
            var c, d, e, f, h;
            return g.H(function (l) { if (1 == l.j) return c = g.gP(b, "offlineVideoStreams"), g.z(l, c7(a, c, "offlineVideoStreams"), 2); d = l.B; if (!d || !d.streamsProgress) return l.return(); e = g.u(d.streamsProgress); for (f = e.next(); !f.done; f = e.next())h = f.value, h.streamState = "DOWNLOAD_STREAM_STATE_COMPLETE", h.numTotalBytes !== h.numBytesDownloaded && (h.numBytesDownloaded = h.numTotalBytes); return g.z(l, b7(a, d, "offlineVideoStreams"), 0) })
        }, Dwb = function (a, b, c, d) {
            if (a && a.streamsProgress) {
                d = a;
                a: { b = b.itag + ";" + b.xtags; for (var e = a.streamsProgress, f = 0; f < e.length; f++) { var h = JSON.parse(e[f].formatStreamBytes); if (h.itag + ";" + h.xtags === b) { e[f] = c; c = e; break a } } e.push(c); c = e } d.streamsProgress = c
            } else a = { key: d, streamsProgress: [c] }; return a
        }, Cwb = function (a) {
            if (null == a ? 0 : a.streamsProgress) {
                var b = 0;
                a = a.streamsProgress; for (var c = 0; c < a.length; c++) { var d = a[c]; isNaN(Number(d.numBytesDownloaded)) ? i7("stream progress bytes number invalid") : b += Number(d.numBytesDownloaded) } return b
            } return 0
        }, Gwb = function (a, b, c, d) {
            g.I.call(this);
            var e = this; this.B = a; this.api = b; this.Ua = c; this.ra = d; this.K = new g.QE; this.D = new g.cv(function () { e.j && "TRANSFER_STATE_TRANSFERRING" === e.j.transferState && e.K.Nh() && (3 > (e.j.transferRetryCount || 0) ? K7(e.N, e.G, !1, !1) : J7(e.N, e.G.videoDetails.videoId), e.Cw("TRANSFER_FAILURE_REASON_TIMEOUT_NO_PROGRESS")) });
            this.ma = this.Ga = 0; this.Xa = g.OJ(this.api.U().experiments, "html5_transfer_processing_logs_interval"); this.Z = !1; this.Ta = new g.hL(this); this.W = !1; this.Bd = {
                amb: function () { return e.D },
                Klb: function () { return e.ra },
                yW: function () { return e.K }
            };
            this.Ba = Aub(this.B, this.o2.bind(this)); this.N = new uwb(b, this); this.Za = new qwb; this.Ea = new L7(this.B); this.Na = this.K.Ra("publicytnetworkstatus-online", this.pF.bind(this)); this.Ka = this.K.Ra("publicytnetworkstatus-offline", this.Laa.bind(this)); this.W = this.api.U().L("html5_less_transfer_processing_logs"); g.M(this, this.Ta); this.Ta.T(b, "offlinetransferpause", this.Maa); g.FS(this.api.U()) ? this.C = "mainVideoDownloadStateEntity" : g.BH(this.api.U()) && (this.C = "musicTrackDownloadMetadataEntity")
        }, Hwb = function (a) {
            return g.H(function (b) {
                if (1 ==
                    b.j) b = g.z(b, Lub(), 2);
                else { var c = a.Ea; var d = g.eT(); d = Object.keys(d); c = Bwb(c, d); b = g.z(b, c, 0) } return b
            })
        }, N7 = function (a, b) {
            b = void 0 === b ? !1 : b;
            var c; return g.H(function (d) { if (1 == d.j) { if (a.j) throw Error("Already downloading a video"); a.ma = 0; a.Z = !1; return g.z(d, Iwb(a), 2) } return 4 != d.j ? (c = d.B, kvb(a.Ua, !c), c && a.K.Nh() ? b ? g.z(d, new Promise(function (e) { g.nC(e, 1E3) }), 4) : d.La(4) : (!c && a.j && M7(a), d.La(0))) : g.z(d, Jwb(a, c), 0) })
        }, Kwb = function (a) {
            return g.H(function (b) {
                if (1 == b.j) return a.G ? g.z(b, J7(a.N, a.G.videoDetails.videoId), 3) : b.La(0);
                M7(a); g.Aa(b)
            })
        }, Lwb = function (a, b) {
            var c, d, e;
            return g.H(function (f) { switch (f.j) { case 1: return g.Ba(f, 2), (c = !!b.captionTracks.length || !!b.Wd) ? g.z(f, twb(b.videoId), 4) : f.return(); case 4: return (d = f.B) ? f.return() : g.z(f, swb(a.Za, b), 5); case 5: g.Ca(f, 0); break; case 2: e = g.Da(f), i7("Caption downloading error", e, b.cotn), g.Aa(f) } })
        }, Jwb = function (a, b) {
            var c, d, e, f, h, l;
            return g.H(function (m) {
                switch (m.j) {
                    case 1: if (a.Z) return m.return(); a.Z = !0; a.j = b; c = g.fP(a.j.key); d = c.entityId; e = void 0; if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) return g.z(m, O7(a, d), 7); if ("TRANSFER_STATE_TRANSFER_IN_QUEUE" !== a.j.transferState || a.j.transferRetryCount || a.j.hasLoggedFirstStarted) { m.La(3); break } return g.z(m, O7(a, d), 5); case 5: return e = m.B, a.j.hasLoggedFirstStarted = !0, g.z(m, Mwb(a), 6); case 6: mvb({ videoId: d, yl: a.j, offlineModeType: e }, void 0, void 0, !0); m.La(3); break; case 7: e = m.B,
                        m7({ transferStatusType: "TRANSFER_STATUS_TYPE_RESUME_PROCESSING", statusType: "OFFLINING_RETRIED" }, { videoId: d, yl: a.j, offlineModeType: e }); case 3: return g.z(m, Nwb(a), 8); case 8: return f = null, g.Ba(m, 9), g.z(m, Owb(a, b), 11); case 11: f = m.B; a.G = f; g.Ca(m, 10); break; case 9: return h = g.Da(m), i7("error getting player response", h, b.cotn), g.z(m, a.Cw("TRANSFER_FAILURE_REASON_INTERNAL"), 12); case 12: return m.return(); case 10: return l = rvb(a.api.U(), b.cotn, f), g.z(m, Lwb(a, l), 13); case 13: return g.z(m, wwb(l.videoId), 14); case 14: l.Uq =
                            m.B, Awb(a.N, l, b.maximumDownloadQuality), a.D.start(108E5), g.Aa(m)
                }
            })
        }, Iwb = function (a) {
            var b, c;
            return g.H(function (d) { if (1 == d.j) return g.z(d, d7(a.B, "transfer"), 2); b = d.B; c = b.filter(Pwb).sort(Qwb); return 0 === c.length ? d.return() : d.return(c[0]) })
        }, Nwb = function (a) {
            var b, c, d;
            return g.H(function (e) { if (1 == e.j) { if (!a.j) return P7(a, "onTransferStart"), e.return(); a.D.start(108E5); return g.z(e, Q7(a, "TRANSFER_STATE_TRANSFERRING"), 2) } b = a.j; return (d = (null == (c = b) ? 0 : c.key) ? g.fP(b.key).entityId : "") && a.C ? g.z(e, r7(d, a.C, a.B, "DOWNLOAD_STATE_DOWNLOAD_IN_PROGRESS"), 0) : e.La(0) })
        }, ywb = function (a) {
            var b, c, d, e;
            g.H(function (f) { switch (f.j) { case 1: if (!a.j) { P7(a, "onTransferPausedByUser"); f.La(2); break } b = a.j; a.D.stop(); return g.z(f, Q7(a, "TRANSFER_STATE_PAUSED_BY_USER"), 3); case 3: d = (null == (c = b) ? 0 : c.key) ? g.fP(b.key).entityId : ""; if (!d || !a.C) { f.La(4); break } return g.z(f, r7(d, a.C, a.B, "DOWNLOAD_STATE_PAUSED"), 4); case 4: return g.z(f, O7(a, d), 6); case 6: e = f.B, nvb({ videoId: d, yl: b, offlineModeType: e }); case 2: M7(a), N7(a), g.Aa(f) } })
        }, zwb = function (a) {
            var b, c, d;
            g.H(function (e) { if (1 == e.j) { if (!a.j) return P7(a, "onTransferPausedByNetwork"), e.return(); a.D.stop(); return g.z(e, Q7(a, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 2) } if (3 != e.j) return b = a.j, (d = (null == (c = b) ? 0 : c.key) ? g.fP(b.key).entityId : "") && a.C ? g.z(e, r7(d, a.C, a.B, "DOWNLOAD_STATE_PAUSED"), 3) : e.La(3); M7(a); g.Aa(e) })
        }, Rwb = function (a) {
            var b, c, d, e, f;
            g.H(function (h) {
                switch (h.j) {
                    case 1: if (!a.j) return P7(a, "onTransferComplete"), h.return(); b = a.j; a.D.stop(); if (!b || !a.G) { h.La(2); break } c = rvb(a.api.U(), b.cotn, a.G); return g.z(h, Lwb(a, c), 2); case 2: return g.z(h, Q7(a, "TRANSFER_STATE_COMPLETE", "DOWNLOAD_STREAM_STATE_COMPLETE"), 4); case 4: e = (null == (d = b) ? 0 : d.key) ? g.fP(b.key).entityId : ""; if (!e || !a.C) { h.La(5); break } return g.z(h, r7(e, a.C, a.B, "DOWNLOAD_STATE_COMPLETE"), 5); case 5: return g.z(h, Fwb(a.B, e), 7); case 7: return g.z(h, O7(a, e), 8); case 8: f = h.B, m7({
                        transferStatusType: "TRANSFER_STATUS_TYPE_COMPLETED",
                        statusType: "SUCCESS"
                    }, { videoId: e, yl: b, offlineModeType: f }), M7(a), N7(a), g.Aa(h)
                }
            })
        }, Swb = function (a, b, c) {
            var d, e;
            g.H(function (f) { switch (f.j) { case 1: if (!a.j) return P7(a, "onTransferProgress: " + b), f.return(); if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) { f.La(2); break } return g.z(f, Nwb(a), 2); case 2: d = Date.now(); if (!(1E3 < d - a.Ga)) { f.La(4); break } a.Ga = d; return g.z(f, Ewb(a.B, c.videoId, c.B, c.zN, c.bytesDownloaded, c.j), 5); case 5: if (a.W && !(a.W && d - a.ma > a.Xa)) { f.La(4); break } a.ma = d; return g.z(f, O7(a, b), 7); case 7: e = f.B, mvb({ videoId: b, yl: a.j, offlineModeType: e }, c.bytesDownloaded, c.j); case 4: a.D.start(108E5), g.Aa(f) } })
        },
        Twb = function (a) {
            var b = 3 > (a.j.transferRetryCount || 0);
            b && (a = a.j, a.transferRetryCount = (a.transferRetryCount || 0) + 1); return b
        }, Uwb = function (a, b) {
            b = void 0 === b ? "TRANSFER_FAILURE_REASON_UNKNOWN" : b;
            var c, d, e, f; return g.H(function (h) {
                if (1 == h.j) return a.j || P7(a, "setTransferToFailed: " + b), c = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", "TRANSFER_FAILURE_REASON_NETWORK" === b ? c = "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED" : "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" === b && (c = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED"), g.z(h, Q7(a, "TRANSFER_STATE_FAILED", "DOWNLOAD_STREAM_STATE_ERROR_STREAMS_MISSING", b), 2); if (3 != h.j) return k7(a.ra, { entityKey: null == (d = a.j) ? void 0 : d.key, failureReason: c }),
                    e = a.j ? g.fP(a.j.key).entityId : "", g.z(h, O7(a, e), 3); f = h.B; var l = { videoId: e, yl: a.j, offlineModeType: f }, m = b, n = { transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_WITH_FAILURE", statusType: "FAILED" }; m && (n.transferFailureReason = m, n.failureReason = ovb(m)); m7(n, l); g.Aa(h)
            })
        }, Q7 = function (a, b, c, d) {
            var e;
            return g.H(function (f) {
                if (1 == f.j) {
                    if (!a.j) return P7(a, "saveTransferState: " + b), f.return(); a.j.transferState = b; a.j.failureReason = d; g.Ba(f, 2); return g.z(f, Mwb(a, function (h) { return c ? V6(h, "offlineVideoStreams", a.j.offlineVideoStreams).then(function (l) { for (var m = g.u(l), n = m.next(); !n.done; n = m.next())if ((n = n.value) && n.streamsProgress) { n = g.u(n.streamsProgress); for (var p = n.next(); !p.done; p = n.next())p.value.streamState = c } return rub(h, l.filter(function (q) { return !!q }), "offlineVideoStreams") }) : g.PD.resolve(void 0) }),
                        4)
                } if (2 != f.j) return g.Ca(f, 0);
                e = g.Da(f); return e instanceof g.KD && "QUOTA_EXCEEDED" === e.type ? g.z(f, a.Cw("TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE"), 0) : f.La(0)
            })
        }, Mwb = function (a, b) {
            var c;
            return g.H(function (d) { if (!a.j) return d.return(); c = a.j; return g.z(d, a7(a.B, { mode: "readwrite", Tb: !0 }, function (e) { var f = [X6(e, c, "transfer")]; b && f.push(b(e)); return g.PD.all(f) }), 0) })
        }, M7 = function (a) {
            a.j = void 0;
            a.G = void 0; a.D.stop()
        }, Owb = function (a, b) {
            var c, d, e, f, h;
            return g.H(function (l) { if (1 == l.j) return c = g.fP(b.key), d = c.entityId, e = g.gP(d, "playbackData"), g.z(l, c7(a.B, e, "playbackData"), 2); f = l.B; if (null == (h = f) ? 0 : h.playerResponseJson) return l.return(JSON.parse(f.playerResponseJson)); throw Error("No PlayerResponse found"); })
        }, P7 = function (a, b) {
            a.api.va("woffle", { mcte: b });
            i7("missing current transfer entity.")
        }, O7 = function (a, b) {
            var c, d, e;
            return g.H(function (f) { if (1 == f.j) return g.z(f, c7(a.B, g.gP(b, "videoDownloadContextEntity"), "videoDownloadContextEntity"), 2); c = f.B; return f.return(null != (e = null == (d = c) ? void 0 : d.offlineModeType) ? e : void 0) })
        }, Pwb = function (a) { return void 0 !== Vwb[a.transferState] }, Qwb = function (a, b) {
            var c = Vwb[a.transferState], d = Vwb[b.transferState];
            return c !== d ? c - d : Number(a.enqueuedTimestampMs) - Number(b.enqueuedTimestampMs)
        }, R7 = function (a, b) {
            var c = this;
            this.X = a; this.api = b; this.K = new g.QE; this.C = new gvb(function () { return Wwb(c) }, function () { c.OR() }, this.api.vn(), this.api.L.bind(this.api));
            this.j = new j7(this.api); this.D = new g.go; this.Bd = {
                uW: function () { return c.C.Bd.uW() },
                yW: function () { return c.K },
                Llb: function () { return c.C },
                OO: function () { return c.OO() },
                LR: function () { return c.LR() },
                OR: function () { return c.OR() },
                jR: function () { return c.jR() },
                gR: function () { return c.gR() }
            };
            hvb(this.C)
        }, Wwb = function (a) {
            return g.H(function (b) {
                a.api.ib("onOrchestrationBecameLeader");
                return g.z(b, a.LR(), 0)
            })
        }, Ywb = function (a) {
            var b, c;
            return g.H(function (d) { if (1 == d.j) return g.z(d, e7(), 2); if (3 != d.j) { b = d.B; if (!b) return i7("PES is undefined"), d.return(); a.B = new Gwb(b, a.api, a.C, a.j); c = a.kD(b); return g.z(d, fwb(b, c, a.C, a.j, a.X), 3) } a.G = d.B; return g.z(d, Xwb(a), 0) })
        }, Xwb = function (a) {
            var b;
            return g.H(function (c) {
                switch (c.j) {
                    case 1: if (!a.B) return i7("transferManager is undefined"), c.return(); if (a.B.j) { c.La(2); break } return g.z(c, N7(a.B), 2); case 2: if (!a.X.L("woffle_enable_main_downloads_library")) { c.La(4); break } return g.z(c, a.qY(), 4); case 4: return g.z(c, a.refreshAllStaleEntities(43200, !0), 6); case 6: return g.z(c, a.OM(), 7); case 7: if (!a.X.L("html5_retry_downloads_for_expiration")) { c.La(8); break } return g.z(c, a.gR(), 8); case 8: return a.N = g.oC(function () { a.refreshAllStaleEntities(43200, !0); a.OM() },
                        9E5), g.wD(g.yD(), function () { return a.jR() }), g.z(c, e7(), 10);
                    case 10: return b = c.B, g.z(c, fvb(b), 11); case 11: ivb(a.C), g.Aa(c)
                }
            })
        }, Zwb = function () {
            var a, b, c, d, e, f;
            return g.H(function (h) {
                switch (h.j) {
                    case 1: return g.z(h, e7(), 2); case 2: a = h.B; if (!a) return h.return([]); b = Date.now() / 1E3; return g.z(h, d7(a, "offlineVideoPolicy"), 3); case 3: c = h.B, d = g.u(c), e = d.next(); case 4: if (e.done) { h.La(6); break } f = e.value; if (!(f.expirationTimestamp && Number(f.expirationTimestamp) < b)) { h.La(5); break } f.action = "OFFLINE_VIDEO_POLICY_ACTION_DISABLE"; f.offlinePlaybackDisabledReason = "OFFLINE_PLAYBACK_DISABLED_REASON_CLIENT_OFFLINE_CONTENT_EXPIRED"; return g.z(h, b7(a, f, "offlineVideoPolicy"), 5);
                    case 5: e = d.next(); h.La(4); break; case 6: return h.return(c.map(function (l) { return l.key }))
                }
            })
        }, S7 = function (a, b, c, d, e) {
            var f, h, l;
            return g.H(function (m) {
                if (1 == m.j) return g.z(m, e7(), 2); f = m.B; if (!f) return m.return([]); h = b.map(function (n) { var p = g.gP(n, c); p = { actionType: d, entityKey: p, actionMetadata: Object.assign({}, svb(), e) }; "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" !== d && (p.actionMetadata.priority = 0); n = new v7(c, n, p); return x7(n) });
                l = Bub(f, h); hvb(a.C); return m.return(l)
            })
        }, $wb = function (a, b, c) {
            var d, e, f, h, l, m, n;
            return g.H(function (p) { switch (p.j) { case 1: d = [], e = g.u(b), f = e.next(); case 2: if (f.done) { p.La(4); break } h = f.value; if (h.upToDate || c && !h.shouldAutoSyncMetadata || !h.playlistId) { p.La(3); break } l = {}; m = { nextAutoRefreshIntervalSeconds: h.checkInSeconds, autoSync: c }; l = { mainPlaylistEntityActionMetadata: m }; return g.z(p, S7(a, [h.playlistId], "mainPlaylistEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", l), 6); case 6: (n = p.B) && d.push.apply(d, g.oa(n)); case 3: f = e.next(); p.La(2); break; case 4: return p.return(d) } })
        }, axb = function (a,
            b) {
                var c;
            return g.H(function (d) { return b.length ? (c = svb(), g.hG(c, G7, { isEnqueuedForExpiredStreamUrlRefetch: !0 }), a.api.va("qrd", { v: b.length }), d.return(S7(a, b, "playbackData", "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", c))) : d.return([]) })
        }, cxb = function (a) {
            var b, c, d, e, f, h;
            return g.H(function (l) { switch (l.j) { case 1: return b = g.FI(), c = Pub(a), d = g.KH(bxb), g.Ba(l, 2), g.z(l, g.xI(b, c, d), 4); case 4: e = l.B; g.Ca(l, 3); break; case 2: throw f = g.Da(l), i7("GetOffline fetch request error", f), Error("GetOffline fetch request error"); case 3: if (e) { if (0 === (null == (h = e.errorMetadata) ? void 0 : h.status)) throw Error("Empty response body"); if (!e.videos || !e.videos.length) throw Error("No data"); } else throw Error("Network request failed"); return l.return(e.videos.map(function (m) { return m.offlineVideoData })) } })
        },
        dxb = function (a) {
            var b, c, d, e, f, h;
            return g.H(function (l) { switch (l.j) { case 1: return b = g.FI(), c = Qub(a), d = g.KH(bxb), g.Ba(l, 2), g.z(l, g.xI(b, c, d), 4); case 4: e = l.B; g.Ca(l, 3); break; case 2: throw f = g.Da(l), i7("GetOffline fetch request error for playlist", f), Error("GetOffline fetch request error for playlist"); case 3: if (e) { if (0 === (null == (h = e.errorMetadata) ? void 0 : h.status)) throw Error("Empty response body"); if (!e.playlists || !e.playlists.length) throw Error("No data"); } else throw Error("Network request failed"); return l.return(e.playlists.map(function (m) { return m.offlinePlaylistData })) } })
        },
        fxb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta;
            return g.H(function (db) {
                switch (db.j) {
                    case 1: return g.z(db, e7(), 2); case 2: e = db.B; if (!e) return db.return([]); f = []; if (null == (h = d) ? 0 : h.length) { f = d; db.La(3); break } return g.z(db, d7(e, "mainPlaylistEntity"), 4); case 4: f = db.B; case 3: if (!f.length) return db.return([]); l = []; m = Date.now() / 1E3; n = g.u(f); p = n.next(); case 5: if (p.done) return l.length ? g.z(db, exb(l), 10) : db.return([]); q = p.value; if (!q.downloadState) { r = void 0; db.La(8); break } return g.z(db, c7(e, q.downloadState, "mainPlaylistDownloadStateEntity"), 9); case 9: r =
                        db.B; case 8: t = r; v = void 0; B = (x = null == (v = q) ? void 0 : v.entityMetadata) && x.nextAutoRefreshIntervalSeconds ? Number(x.nextAutoRefreshIntervalSeconds) : NaN; E = Number.isNaN(B) ? a : B; G = F = void 0; P = (null == (F = t) ? 0 : F.lastSyncedTimestampMillis) ? Number(null == (G = t) ? void 0 : G.lastSyncedTimestampMillis) / 1E3 : 0; R = Q = void 0; ha = (null == (Q = t) ? 0 : Q.addedTimestampMillis) ? Number(null == (R = t) ? void 0 : R.addedTimestampMillis) / 1E3 : 0; if (c || !x || P + E <= m) {
                            wa = []; ua = void 0; if (null == (ua = q.videos) ? 0 : ua.length) for (ma = g.u(q.videos), sa = ma.next(); !sa.done; sa =
                                ma.next())da = sa.value, ba = JSON.parse(g.fP(da).entityId), ba.videoId && wa.push(ba.videoId); La = "0"; x && (y = void 0, La = String(Number(null != (y = x.offlineLastModifiedTimestampSeconds) ? y : 0).toFixed())); Z = { playlistId: q.playlistId, videoIds: wa, offlineLastModifiedTimestamp: La, autoSync: b, offlineDateAddedTimestamp: String(ha.toFixed()) }; l.push(Z)
                        } p = n.next(); db.La(5); break; case 10: return Ta = db.B, db.return(Ta)
                }
            })
        }, gxb = function () {
            var a, b, c, d, e;
            return g.H(function (f) { if (1 == f.j) return g.z(f, e7(), 2); if (3 != f.j) return (a = f.B) ? g.z(f, d7(a, "refresh"), 3) : f.return(!1); b = f.B; if (null == (c = b[0]) || !c.refreshTime) return f.return(!1); d = Number(b[0].refreshTime); e = Date.now() / 1E3; return f.return(isFinite(d) && e >= d) })
        }, ixb = function (a, b) {
            var c, d, e;
            return g.H(function (f) { switch (f.j) { case 1: return g.Ba(f, 2), g.z(f, hxb(a, b), 4); case 4: return d = f.B, g.z(f, Avb(d), 5); case 5: c = Dvb(d); g.Ca(f, 3); break; case 2: e = g.Da(f), i7("getAndProcessSmartDownloadsResponse request or processing error", e); case 3: return f.return(c) } })
        }, jxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua;
            return g.H(function (ma) {
                switch (ma.j) {
                    case 1: return g.z(ma, e7(), 2); case 2: c = ma.B; if (!c) return ma.return([]); d = []; if (null == (e = b) ? 0 : e.length) { d = b; ma.La(3); break } return g.z(ma, d7(c, "musicPlaylist"), 4); case 4: d = ma.B; case 3: if (!d.length) return ma.return([]); f = []; Date.now(); h = g.u(d); l = h.next(); case 5: if (l.done) return f.length ? g.z(ma, exb(f), 10) : ma.return([]); m = l.value; n = void 0; q = (p = null == (n = m) ? void 0 : n.entityMetadata) && p.nextAutoRefreshIntervalSeconds ? Number(p.nextAutoRefreshIntervalSeconds) : NaN; Number.isNaN(q);
                        t = r = 0; if (!m.downloadMetadata) { ma.La(8); break } return g.z(ma, c7(c, m.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 9); case 9: v = ma.B, B = x = void 0, r = Number(null != (B = null == (x = v) ? void 0 : x.addedTimestampMillis) ? B : "0") / 1E3, F = E = void 0, t = Number(null != (F = null == (E = v) ? void 0 : E.lastModifiedTimestampMillis) ? F : "0") / 1E3; case 8: G = []; P = void 0; if (null == (P = m.tracks) ? 0 : P.length) for (Q = g.u(m.tracks), R = Q.next(); !R.done; R = Q.next())ha = R.value, G.push(g.fP(ha).entityId); wa = {
                            playlistId: m.playlistId, videoIds: G, offlineLastModifiedTimestamp: String(t.toFixed()),
                            autoSync: a, offlineDateAddedTimestamp: String(r.toFixed())
                        }; f.push(wa); l = h.next(); ma.La(5); break; case 10: return ua = ma.B, ma.return(ua)
                }
            })
        }, hxb = function (a, b) {
            var c, d, e, f, h, l, m;
            return g.H(function (n) {
                switch (n.j) {
                    case 1: return c = g.FI(), g.z(n, e7(), 2); case 2: d = n.B; if (!d) { n.La(3); break } return g.z(n, Yub(d), 4); case 4: e = n.B; case 3: var p = e; f = { context: g.IH(), browseId: "FEdownloads", browseRequestSupportedMetadata: { downloadsBrowseParams: { offlineFeatureSettingState: { isSdEnabled: a }, offlineClientState: p, clientStateRequestData: { preferredFormatType: b } } } }; h = g.KH(kxb); g.Ba(n, 5); return g.z(n, g.xI(c, f, h), 7); case 7: l = n.B; g.Ca(n, 6); break; case 5: throw m = g.Da(n), i7("DPS fetch request error for smart downloads",
                        m), Error("DPS fetch request error for smart downloads"); case 6: if (!l) throw Error("Network request failed"); return n.return(l)
                }
            })
        }, exb = function (a) {
            var b, c, d, e, f, h;
            return g.H(function (l) {
                switch (l.j) {
                    case 1: return b = g.FI(), c = Rub(a), d = g.KH(lxb), g.Ba(l, 2), g.z(l, g.xI(b, c, d), 4); case 4: e = l.B; g.Ca(l, 3); break; case 2: throw f = g.Da(l), i7("offlinePlaylistSyncCheck fetch request error", f), Error("offlinePlaylistSyncCheck fetch request error"); case 3: if (e) { if (0 === (null == (h = e.errorMetadata) ? void 0 : h.status)) throw Error("Empty response body"); if (!e.offlinePlaylistSyncCheckDatas || !e.offlinePlaylistSyncCheckDatas.length) throw Error("No data"); } else throw Error("Network request failed");
                        return l.return(e.offlinePlaylistSyncCheckDatas.map(function (m) { return m.offlinePlaylistSyncCheckData }))
                }
            })
        }, mxb = function (a, b, c) {
            this.j = a;
            this.X = b; this.C = c
        }, pxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F;
            return g.H(function (G) {
                switch (G.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, f = [], g.Ba(G, 2), g.z(G, nxb(a, e), 4); case 4: f = G.B; if (!(a.X.L("woffle_enable_main_downloads_library") && (null == (h = f) ? 0 : h.length))) { G.La(5); break } return g.z(G, Fvb(a.j, [b.entityKey]), 5); case 5: g.Ca(G, 3); break; case 2: return l = g.Da(G), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.KD && "QUOTA_EXCEEDED" === l.type ? (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                        n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE") : i7("Playlist add error"), G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n)); case 3: p = []; if (!a.X.L("html5_offline_prevent_redownload_downloaded_video")) { G.La(7); break } return g.z(G, qvb(a.j, "mainVideoEntity", f), 8); case 8: f = G.B; case 7: if (null == (q = f) ? 0 : q.length) for (r = g.u(f), t = r.next(); !t.done; t = r.next())if (v = t.value, x = v.offlineVideoData, B = void 0, null == (B = x) ? 0 : B.videoId) E = void 0, F = Number((null == (E = b.actionMetadata) ? void 0 : E.priority) ||
                            0) + 1, p.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", x.videoId, "mainVideoEntity", F, T7, oxb(b, x, e))); return G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p))
                }
            })
        }, rxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb, Qa, Xa, Za, rb, ib, A, C, D, J, K, aa, qa, ia, L, X, ya, xa, ab, Wa, xb, Qb, eb, Ub, Vb, Ac, Yb, wc, Pc, Gc, Hc, Xc, Rb, td, ud, vd, yb, Bc, Fb, Yc, Cd;
            return g.H(function (Nb) {
                switch (Nb.j) {
                    case 1: return c = n7(b), d = b.entityKey, e = g.fP(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Nb, d7(a.j, "mainPlaylistEntity"), 5)) : g.z(Nb, c7(a.j, d, "mainPlaylistEntity"), 4); case 4: (l = Nb.B) && f.push(l); Nb.La(3); break; case 5: f = Nb.B; case 3: if (null == (m = f) || !m.length) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); n = g.U(b.actionMetadata, qxb); q = null == (p = n) ? void 0 : p.nextAutoRefreshIntervalSeconds; t = null == (r = n) ? void 0 : r.autoSync; v = []; B = x =
                        !0; E = !1; if (!h && !1 === t) { Nb.La(6); break } g.Ba(Nb, 7); return g.z(Nb, fxb(0, !!t, !0, f), 9); case 9: v = Nb.B; g.Ca(Nb, 8); break; case 7: F = g.Da(Nb); if (!(F instanceof Error && "No data" === F.message)) { F instanceof Error && "Empty response body" === F.message && i7(F.message); Nb.La(8); break } return "!*$_ALL_ENTITIES_!*$" === e ? g.z(Nb, zvb(a.j, b, a.C, "OFFLINE_DELETE_REASON_UNAVAILABLE"), 8) : g.z(Nb, xvb(e, a.j, b, a.C), 8); case 8: if (!v.length || !h && v[0].playlistId !== e) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
                    case 6: if (h) { G = []; P = g.u(v); for (Q = P.next(); !Q.done; Q = P.next())R = Q.value, R.upToDate || t && !R.shouldAutoSyncMetadata || !R.playlistId || (ha = { nextAutoRefreshIntervalSeconds: R.checkInSeconds, autoSync: t }, G.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", R.playlistId, "mainPlaylistEntity", 0, T7, { mainPlaylistEntityActionMetadata: ha }))); return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, G)) } v.length && (wa = v[0], E = !!wa.upToDate, t && (x = null != (ua = wa.shouldAutoSyncMetadata) ? ua : !0, B = null != (ma = wa.shouldAutoSyncVideos) ?
                        ma : !0, wa.checkInSeconds && (q = wa.checkInSeconds))); if (E || !x) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); sa = []; da = f[0]; if (!da.downloadState) { ba = void 0; Nb.La(15); break } return g.z(Nb, c7(a.j, da.downloadState, "mainPlaylistDownloadStateEntity"), 16); case 16: ba = Nb.B; case 15: return La = ba, Z = (null == (y = La) ? 0 : y.addedTimestampMillis) ? String(La.addedTimestampMillis) : void 0, g.Ba(Nb, 17), g.z(Nb, nxb(a, e, Z, q), 19); case 19: sa = Nb.B; g.Ca(Nb, 18); break; case 17: Ta = g.Da(Nb); if (!(Ta instanceof Error &&
                            "No data" === Ta.message)) { if (Ta instanceof Error && "Empty response body" === Ta.message) i7(Ta.message); else return db = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Ta instanceof g.KD && "QUOTA_EXCEEDED" === Ta.type && (db = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, db, nb)); Nb.La(18); break } return g.z(Nb, xvb(e,
                                a.j, b, a.C), 18); case 18: if (!B) return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); Qa = []; Xa = new Map; if (null == (Za = sa) ? 0 : Za.length) for (rb = g.u(sa), ib = rb.next(); !ib.done; ib = rb.next())A = ib.value, C = A.offlineVideoData, D = void 0, (null == (D = C) ? 0 : D.videoId) && Xa.set(C.videoId, C); J = new Map; K = []; if (null == (aa = da) ? 0 : null == (qa = aa.videos) ? 0 : qa.length) for (ia = g.u(da.videos), L = ia.next(); !L.done; L = ia.next())if (X = L.value, ya = JSON.parse(g.fP(X).entityId), xa = ya.videoId) Xa.has(xa) ? (J.set(xa, Xa.get(xa)), Xa.delete(xa)) :
                                    K.push(xa); Wa = Number((null == (ab = b.actionMetadata) ? void 0 : ab.priority) || 0) + 1; xb = g.u(Xa.entries()); for (Qb = xb.next(); !Qb.done; Qb = xb.next())eb = Qb.value, Ub = g.u(eb), Vb = Ub.next().value, Ac = Ub.next().value, Yb = Vb, wc = Ac, Qa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", Yb, "mainVideoEntity", Wa, T7, oxb(b, wc, e))); Pc = g.u(J.entries()); for (Gc = Pc.next(); !Gc.done; Gc = Pc.next())Hc = Gc.value, Xc = g.u(Hc), Rb = Xc.next().value, td = Xc.next().value, ud = Rb, vd = td, Qa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", ud, "mainVideoEntity",
                                        Wa, T7, oxb(b, vd, e))); yb = g.u(K); for (Bc = yb.next(); !Bc.done; Bc = yb.next())Fb = Bc.value, Yc = { playlistId: e }, Cd = { offlineLoggingData: { offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_REFRESH" }, mainVideoEntityActionMetadata: Yc }, Qa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE", Fb, "mainVideoEntity", 0, T7, Cd)); return Nb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, Qa))
                }
            })
        }, sxb = function (a, b) {
            var c, d, e, f;
            return g.H(function (h) {
                switch (h.j) {
                    case 1: return c = n7(b), g.Ba(h, 2), d = g.fP(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(h, zvb(a.j, b, a.C, null == (e = b.actionMetadata) ? void 0 : null == (f = e.offlineLoggingData) ? void 0 : f.offlineDeleteReason), 5) : g.z(h, xvb(d, a.j, b, a.C), 6); case 6: if (!a.X.L("woffle_enable_main_downloads_library")) { h.La(5); break } return g.z(h, Gvb(a.j, b.entityKey), 5); case 5: g.Ca(h, 3); break; case 2: return g.Da(h), h.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                        "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return h.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        }, nxb = function (a, b, c, d) {
            var e, f, h, l, m, n;
            return g.H(function (p) { switch (p.j) { case 1: return g.z(p, dxb([b]), 2); case 2: return e = p.B, g.z(p, txb(a, e[0], c, d), 3); case 3: return f = p.B, h = f.mainPlaylistEntity, l = f.Taa, m = vvb(h, l.avatar), g.Ba(p, 4), g.z(p, z7(m), 6); case 6: g.Ca(p, 5); break; case 4: n = g.Da(p), n instanceof Error && "Failed to fetch" === n.message && i7(n.message); case 5: return p.return(e[0].videos) } })
        }, txb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P;
            return g.H(function (Q) {
                if (1 == Q.j) {
                    e = Date.now().toString(); c || (c = e); f = b.videos; h = b.playlistId; l = []; m = []; if (f) for (n = g.u(f), p = n.next(); !p.done; p = n.next()) { q = p.value; r = q.offlineVideoData; if (!r || !r.videoId) throw Error("Invalid offlineVideoData"); t = r.videoId; v = { videoId: t, playlistId: h }; x = { id: g.gP(JSON.stringify(v), "mainPlaylistVideoEntity"), video: g.gP(t, "mainVideoEntity") }; l.push(x); m.push(x.id) } B = b.channel.offlineChannelData; E = uxb(g.gP(h, "ytMainChannelEntity"), B); F = {
                        key: g.gP(h, "mainPlaylistDownloadStateEntity"),
                        addedTimestampMillis: c, lastSyncedTimestampMillis: e
                    }; G = { key: g.gP(h, "mainPlaylistEntity"), playlistId: h, channelOwner: E.id, videos: m, title: b.title, thumbnailStyleData: vxb(b), visibility: wxb(b), downloadState: F.key }; (null == (P = G) ? 0 : P.entityMetadata) ? (G.entityMetadata.offlineLastModifiedTimestampSeconds = b.lastModifiedTimestamp, d && (G.entityMetadata.nextAutoRefreshIntervalSeconds = String(d))) : G && (G.entityMetadata = { nextAutoRefreshIntervalSeconds: d ? String(d) : void 0, offlineLastModifiedTimestampSeconds: b.lastModifiedTimestamp });
                    return g.z(Q, a7(a.j, { mode: "readwrite", Tb: !0 }, function (R) { for (var ha = X6(R, G, "mainPlaylistEntity"), wa = X6(R, E, "ytMainChannelEntity"), ua = X6(R, F, "mainPlaylistDownloadStateEntity"), ma = [], sa = g.u(l), da = sa.next(); !da.done; da = sa.next())ma.push(X6(R, da.value, "mainPlaylistVideoEntity")); return g.PD.all([ha, wa, ua].concat(g.oa(ma))) }), 2)
                } return Q.return({
                    mainPlaylistEntity: G,
                    Taa: E, Qmb: l
                })
            })
        }, uxb = function (a, b) {
            return {
                id: a,
                channelId: b.channelId, title: b.title, avatar: b.thumbnail
            }
        }, vxb = function (a) {
            var b = [], c = a.videos;
            c && 0 < c.length && b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_FIRST_VIDEO"), value: { collageThumbnail: { coverThumbnail: c[0].offlineVideoData.thumbnail } } }); if ((a = a.additionalMetadadatas) && 0 < a.length) for (a = g.u(a), c = a.next(); !c.done; c = a.next()) {
                var d = c.value.offlineBundleItemPlaylistData, e = void 0; c = null == (e = d) ? void 0 : e.style; e = void 0; d = { collageThumbnail: { coverThumbnail: null == (e = d) ? void 0 : e.coverThumbnail } }; switch (c) {
                    case "BUNDLE_ITEM_STYLE_UNSPECIFIED": b.push({
                        key: Number("PLAYLIST_THUMBNAIL_STYLE_UNKNOWN"),
                        value: d
                    }); break; case "BUNDLE_ITEM_STYLE_TWO_BY_TWO": b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_TWO_BY_TWO"), value: d }); break; case "BUNDLE_ITEM_STYLE_ONE_AND_TWO_AVATAR": b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO_AVATAR"), value: d }); break; case "BUNDLE_ITEM_STYLE_ONE_AND_TWO": b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO"), value: d })
                }
            } return b
        }, wxb = function (a) {
            switch (a.privacy) {
                case "PRIVATE": return "PLAYLIST_VISIBILITY_PRIVATE";
                case "PUBLIC": return "PLAYLIST_VISIBILITY_PUBLIC"; case "UNLISTED": return "PLAYLIST_VISIBILITY_UNLISTED"; default: return "PLAYLIST_VISIBILITY_UNKNOWN"
            }
        }, oxb = function (a, b, c) {
            b = {
                offlineVideoData: b,
                playlistId: c
            }; if (a = g.U(a.actionMetadata, qxb)) b.maximumDownloadQuality = a.maximumDownloadQuality; return { mainVideoEntityActionMetadata: b }
        }, xxb = function (a, b, c) {
            this.j = a;
            this.X = b; this.C = c
        }, Axb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function (x) {
                switch (x.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, f = g.U(b.actionMetadata, U7), l = !(null == (h = f) ? 0 : h.playlistId), g.Ba(x, 2), g.z(x, yxb(a, e, void 0, null == (m = f) ? void 0 : m.offlineVideoData, l), 4); case 4: g.Ca(x, 3); break; case 2: return n = g.Da(x), p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.KD && "QUOTA_EXCEEDED" === n.type && (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                        x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, p, q)); case 3: r = 1; r = Number((null == (t = b.actionMetadata) ? void 0 : t.priority) || 0) + 1; var B = (B = g.U(b.actionMetadata, U7)) ? { playbackDataActionMetadata: { maximumDownloadQuality: B.maximumDownloadQuality } } : void 0; v = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", r, zxb, B); return x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [v]))
                }
            })
        }, Bxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F;
            return g.H(function (G) {
                switch (G.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, g.z(G, c7(a.j, b.entityKey, "mainVideoEntity"), 2); case 2: f = G.B; if (!f) { h = void 0; G.La(3); break } return g.z(G, c7(a.j, f.downloadState, "mainVideoDownloadStateEntity"), 4); case 4: h = G.B; case 3: l = h; if (!f || !l) return G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.Ba(G, 5); return g.z(G, yxb(a, e, l.addedTimestampMillis, null == (n = g.U(b.actionMetadata, U7)) ? void 0 : n.offlineVideoData), 7); case 7: p = 1; p = Number((null ==
                        (q = b.actionMetadata) ? void 0 : q.priority) || 0) + 1; m = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", p, zxb); g.Ca(G, 6); break; case 5: r = g.Da(G); if (!(r instanceof Error && "No data" === r.message)) {
                            if (r instanceof Error && "Empty response body" === r.message) i7(r.message); else return t = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", v = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", r instanceof g.KD && "QUOTA_EXCEEDED" === r.type && (t = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                                v = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, t, v)); G.La(6); break
                        } return g.z(G, Hvb(a.j, e), 9); case 9: x = G.B; B = g.U(b.actionMetadata, U7); if (F = null == (E = B) ? void 0 : E.playlistId) x.playlistId = F; x.offlineDeleteReason = "OFFLINE_DELETE_REASON_UNAVAILABLE"; return g.z(G, A7(e, a.j, b, a.C, x), 6); case 6: return G.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, m ? [m] : void 0))
                }
            })
        }, Cxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q;
            return g.H(function (r) {
                switch (r.j) {
                    case 1: return c = n7(b), g.Ba(r, 2), d = g.fP(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(r, zvb(a.j, b, a.C, null == (p = b.actionMetadata) ? void 0 : null == (q = p.offlineLoggingData) ? void 0 : q.offlineDeleteReason), 5) : g.z(r, Hvb(a.j, d), 6); case 6: e = r.B; f = g.U(b.actionMetadata, U7); if (l = null == (h = f) ? void 0 : h.playlistId) e.playlistId = l; e.offlineDeleteReason = null == (m = b.actionMetadata) ? void 0 : null == (n = m.offlineLoggingData) ? void 0 : n.offlineDeleteReason; return g.z(r, A7(d, a.j, b, a.C, e), 7);
                    case 7: if (!a.X.L("woffle_enable_main_downloads_library")) { r.La(5); break } return g.z(r, Gvb(a.j, b.entityKey), 5); case 5: g.Ca(r, 3); break; case 2: return g.Da(r), r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return r.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                }
            })
        }, yxb = function (a, b, c, d, e) {
            var f, h, l, m, n, p;
            return g.H(function (q) { switch (q.j) { case 1: if (f = d) { q.La(2); break } return g.z(q, cxb([b]), 3); case 3: h = q.B, f = h[0]; case 2: return g.z(q, Dxb(a, f, c, e), 4); case 4: l = q.B; m = l.mainVideoEntity; n = l.channelEntity; g.Ba(q, 5); var r = u7(m.thumbnail), t = u7(n.avatar); return g.z(q, z7(r.concat(t)), 7); case 7: g.Ca(q, 0); break; case 5: p = g.Da(q), p instanceof Error && "Failed to fetch" === p.message && i7(p.message), g.Aa(q) } })
        }, Dxb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function (x) {
                switch (x.j) {
                    case 1: c || (c = Date.now().toString()); f = null == (e = b.channel) ? void 0 : e.offlineChannelData; h = { id: g.gP(b.videoId, "ytMainChannelEntity"), channelId: f.channelId, title: f.title, avatar: f.thumbnail }; l = { key: g.gP(b.videoId, "mainVideoDownloadStateEntity"), playbackData: g.gP(b.videoId, "playbackData"), addedTimestampMillis: c, videoDownloadContextEntity: g.gP(b.videoId, "videoDownloadContextEntity") }; m = g.gP(b.videoId, "mainVideoEntity"); n = {
                        key: m, videoId: b.videoId, title: b.title, thumbnail: b.thumbnail,
                        localizedStrings: { viewCount: b.shortViewCountText }, lengthSeconds: b.lengthSeconds ? Number(b.lengthSeconds) : void 0, publishedTimestampMillis: b.publishedTimestamp ? (1E3 * Number(b.publishedTimestamp)).toString() : void 0, formattedDescription: b.description, owner: h.id, downloadState: l.key
                    }; if (!a.X.L("woffle_enable_main_downloads_library") || !d) { x.La(2); break } return g.z(x, Evb(a.j, [m]), 3); case 3: if (r = x.B) p = r.mainDownloadsLibraryEntity, q = r.mainDownloadsListEntity; case 2: return v = pvb, t = {
                        key: g.gP(b.videoId, "downloadStatusEntity"),
                        downloadState: "DOWNLOAD_STATE_PENDING_DOWNLOAD"
                    }, g.hG(l, v, t), g.z(x, a7(a.j, { mode: "readwrite", Tb: !0 }, function (B) { var E = X6(B, h, "ytMainChannelEntity"), F = X6(B, l, "mainVideoDownloadStateEntity"), G = X6(B, n, "mainVideoEntity"); E = [E, F, G]; p && (F = X6(B, p, "mainDownloadsLibraryEntity"), E.push(F)); q && (F = X6(B, q, "mainDownloadsListEntity"), E.push(F)); t && (B = X6(B, t, "downloadStatusEntity"), E.push(B)); return g.PD.all(E) }), 4);
                    case 4: return x.return({ mainVideoEntity: n, channelEntity: h })
                }
            })
        }, Exb = function (a, b) {
            this.j = a;
            this.X = b
        }, Gxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R;
            return g.H(function (ha) {
                switch (ha.j) {
                    case 1: return c = n7(b), d = [], g.z(ha, Q6.getInstance(), 2); case 2: e = ha.B; if (!e) { ha.La(3); break } return g.z(ha, e.get("sdois"), 4); case 4: return f = ha.B, g.z(ha, null == (l = e) ? void 0 : l.get("lmqf"), 5); case 5: h = ha.B; case 3: g.Ba(ha, 6); if (void 0 === f) throw Error("prefStorage or opt-in state is undefined"); return g.z(ha, hxb(f, null != (m = h) ? m : "SD"), 8); case 8: return n = ha.B, g.z(ha, Avb(n), 9); case 9: p = Dvb(n); if (!a.X.L("woffle_enable_main_downloads_library")) { ha.La(10); break } if (f) {
                        ha.La(11);
                        break
                    } return g.z(ha, Gvb(a.j, C7), 11); case 11: return g.z(ha, Fvb(a.j, [C7]), 10); case 10: if (null == (q = p) ? 0 : q.length) for (r = g.u(p), t = r.next(); !t.done; t = r.next())if (x = v = t.value, B = x.actionType, E = x.entityKey, F = x.actionMetadata, B && E && F && !g.U(F, Fxb)) {
                        "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === B && (F.offlineLoggingData = { offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_DELETE" }); if (G = g.U(v.actionMetadata, U7)) G.playlistId = "DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", v.actionMetadata = Object.assign({}, v.actionMetadata,
                            { mainVideoEntityActionMetadata: G }); d.push(v)
                    } g.Ca(ha, 7); break; case 6: return P = g.Da(ha), Q = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", R = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", P instanceof g.KD && "QUOTA_EXCEEDED" === P.type && (Q = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", R = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), ha.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, Q, R)); case 7: return ha.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                        c, d))
                }
            })
        }, Hxb = function () {
            R7.apply(this, arguments);
            this.Z = "mainVideoEntity"
        }, Ixb = function (a, b, c) {
            b = void 0 === b ? 43200 : b;
            c = void 0 === c ? !0 : c; var d = void 0 === d ? !1 : d; var e, f, h; return g.H(function (l) { switch (l.j) { case 1: if (!a.K.Nh()) return l.return([]); e = []; g.Ba(l, 2); return g.z(l, fxb(b, c, d), 4); case 4: e = l.B; g.Ca(l, 3); break; case 2: f = g.Da(l), f instanceof Error && "No data" === f.message || f instanceof Error && "Empty response body" === f.message && i7(f.message); case 3: return h = $wb(a, e, c), l.return(h) } })
        }, Jxb = function (a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e, f, h, l, m, n, p, q, r, t, v, x, B, E, F; return g.H(function (G) {
                switch (G.j) {
                    case 1: return e = [], g.z(G, gxb(), 2); case 2: return (f = G.B) || d ? g.z(G, ixb(b, c), 3) : G.return([]); case 3: h = G.B; if (null == (l = h) || !l.length) return G.return([]); m = { offlineDeleteReason: "OFFLINE_DELETE_REASON_PARENT_LIST_REFRESH" }; n = g.u(h); p = n.next(); case 4: if (p.done) { G.La(6); break } r = q = p.value; t = r.actionType; v = r.entityKey; x = r.actionMetadata; if (!(t && v && x) || g.U(x, Fxb)) { G.La(5); break } "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === t && (x.offlineLoggingData =
                        m); B = g.fP(v); E = B.entityId; return g.z(G, S7(a, [E], "mainVideoEntity", t, x), 8); case 8: F = G.B, e = e.concat(F); case 5: p = n.next(); G.La(4); break; case 6: return G.return(e)
                }
            })
        }, Lxb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa;
            return g.H(function (ua) {
                switch (ua.j) {
                    case 1: return e = g.gP(a, "musicTrack"), f = g.gP(a, "transfer"), g.z(ua, a7(b, { mode: "readonly", Tb: !0 }, function (ma) { return g.PD.all([U6(ma, e, "musicTrack"), U6(ma, f, "transfer"), V6(ma, "musicTrack"), V6(ma, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: h = ua.B; l = g.u(h); m = l.next().value; n = l.next().value; p = l.next().value; q = l.next().value; r = m; t = n; v = p; x = q; if (!r) { ua.La(3); break } return g.z(ua, Kxb(r, v), 4); case 4: return B = ua.B, g.z(ua, y7(B), 3); case 3: E = []; F = g.gP(a, "musicTrack"); G = g.u(x); for (P = G.next(); !P.done; P = G.next())Q = P.value, R = g.fP(Q.key).entityId, ha = w7(Q), wa = g.fP(ha.action.entityKey).entityId, R !== a && wa !== a || s7(c, Q.actionProto) || E.push(Q.key); return g.z(ua, a7(b, { mode: "readwrite", Tb: !0 }, function (ma) {
                        var sa = E.map(function (da) { return Y6(ma, da) });
                        sa.push(Y6(ma, F, { Wu: !0 })); return g.PD.all(sa)
                    }), 6);
                    case 6: t7(t), k7(d, { entityKey: F, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }), g.Aa(ua)
                }
            })
        }, V7 = function (a, b, c, d, e) {
            var f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba;
            return g.H(function (La) {
                switch (La.j) {
                    case 1: return f = g.gP(a, b), h = g.gP("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(La, a7(c, { mode: "readonly", Tb: !0 }, function (y) { return g.PD.all([U6(y, f, b), U6(y, h, "musicDownloadsLibraryEntity"), V6(y, b), V6(y, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: l = La.B; m = g.u(l); n = m.next().value; p = m.next().value; q = m.next().value; r = m.next().value; t = n; v = p; x = q; B = r; if (!t) { La.La(3); break } return g.z(La, Kxb(t, x), 4); case 4: return E = La.B, g.z(La, y7(E), 3); case 3: F = []; G = g.u(B); for (P = G.next(); !P.done; P = G.next())Q = P.value, R = g.fP(Q.key).entityId, ha = w7(Q), R !== a && ha.rootActionId !== a || s7(d, Q.actionProto) || F.push(Q.key); wa = g.gP(a, b); return g.z(La, a7(c, { mode: "readwrite", Tb: !0 }, function (y) {
                        var Z = F.map(function (Ta) { return Y6(y, Ta) });
                        Z.push(Y6(y, wa, { Wu: !0 })); return g.PD.all(Z)
                    }), 6);
                    case 6: if (!t) { La.La(0); break } return g.z(La, Mxb(t, x, v), 8); case 8: ua = La.B; ua.reverse(); if (!ua.length) { La.La(0); break } ma = g.u(ua); sa = ma.next(); case 10: if (sa.done) { La.La(0); break } da = sa.value; ba = g.fP(da).entityId; if (!ba) { La.La(11); break } return g.z(La, Lxb(ba, c, d, e), 11); case 11: sa = ma.next(), La.La(10)
                }
            })
        }, W7 = function (a, b, c) {
            var d, e, f, h, l, m;
            return g.H(function (n) {
                if (1 == n.j) return g.z(n, a7(a, { mode: "readwrite", Tb: !0 }, function (p) {
                    var q = V6(p, "transfer"), r = V6(p, "offlineOrchestrationActionWrapperEntity"); return g.PD.all([q, r]).then(function (t) {
                        t = g.u(t); var v = t.next().value, x = t.next().value; t = Nxb.map(function (G) { return uub(p, G) });
                        x = g.u(x); for (var B = x.next(); !B.done; B = x.next()) { B = B.value; var E = "musicTrack" === g.fP(B.actionProto.entityKey).entityType, F = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === B.actionProto.actionType; s7(b, B.actionProto) || E && (!E || F) || t.push(Y6(p, B.key, { Wu: !0 })) } return g.PD.all(t).then(function () { return v })
                    })
                }), 2);
                d = n.B; e = g.u(d); for (f = e.next(); !f.done; f = e.next())h = f.value, t7(h), l = g.fP(h.key).entityId, m = g.gP(l, "musicTrack"), k7(c, { entityKey: m, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }); return g.z(n, tvb(), 0)
            })
        }, Oxb = function (a) {
            for (var b, c = g.u(a.additionalMetadatas), d = c.next(); !d.done; d = c.next())d = d.value, d.offlineMusicVideoData && (b = d.offlineMusicVideoData);
            var e, f, h, l, m; return { id: g.gP(a.videoId, "musicTrack"), videoId: a.videoId, title: a.title, thumbnailDetails: a.thumbnail, lengthMs: String(1E3 * Number(a.lengthSeconds)), albumTitle: null == (e = b) ? void 0 : e.releaseTitle, musicVideoType: null == (f = b) ? void 0 : f.musicVideoType, contentRating: { explicitType: null == (h = b) ? void 0 : h.explicitType }, artistNames: (null == (l = b) ? void 0 : l.byline) || (null == (m = b) ? void 0 : m.channelName), downloadMetadata: g.gP(a.videoId, "musicTrackDownloadMetadataEntity") }
        }, Mxb = function (a, b, c) {
            var d, e, f, h, l, m,
            n, p, q, r, t, v, x, B, E, F, G, P;
            return g.H(function (Q) { d = []; e = new Set; if (null == (f = c) ? 0 : null == (h = f.downloadedTracks) ? 0 : h.length) for (l = g.u(c.downloadedTracks), m = l.next(); !m.done; m = l.next())n = m.value, e.add(n); if (a.tracks) { p = g.u(a.tracks); for (q = p.next(); !q.done; q = p.next())r = q.value, e.has(r) || d.push(r); t = g.u(b); for (v = t.next(); !v.done; v = t.next())if (x = v.value, x.id !== a.id && (B = x.tracks)) for (E = g.u(B), F = E.next(); !F.done; F = E.next())G = F.value, P = d.indexOf(G), -1 !== P && d.splice(P, 1) } return Q.return(d) })
        }, Kxb = function (a, b) {
            var c, d, e, f, h, l, m, n;
            return g.H(function (p) { c = u7(a.thumbnailDetails); d = g.u(b); for (e = d.next(); !e.done; e = d.next())if (f = e.value, f.id !== a.id) for (h = g.u(u7(f.thumbnailDetails)), l = h.next(); !l.done; l = h.next())m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1); return p.return(c) })
        }, Pxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p;
            return g.H(function (q) {
                if (1 == q.j) return c = g.gP("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(q, c7(a, c, "musicDownloadsLibraryEntity"), 2); (d = q.B) || (d = { id: c }); e = g.fP(b).entityType; "musicTrack" === e ? null != (f = d.downloadedTracks) && f.includes(b) || (d.downloadedTracks = (null != (h = d.downloadedTracks) ? h : []).concat(b)) : "musicPlaylist" === e ? null != (l = d.downloadedPlaylists) && l.includes(b) || (d.downloadedPlaylists = (null != (m = d.downloadedPlaylists) ? m : []).concat(b)) : "musicAlbumRelease" !== e || null != (n = d.downloadedAlbumReleases) &&
                    n.includes(b) || (d.downloadedAlbumReleases = (null != (p = d.downloadedAlbumReleases) ? p : []).concat(b)); return g.z(q, b7(a, d, "musicDownloadsLibraryEntity"), 0)
            })
        }, Qxb = function (a, b) {
            var c, d, e, f, h, l, m;
            return g.H(function (n) { if (1 == n.j) return c = g.gP("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(n, c7(a, c, "musicDownloadsLibraryEntity"), 2); d = n.B; if (!d) return n.La(0); e = g.fP(b).entityType; "musicTrack" === e ? f = d.downloadedTracks : "musicPlaylist" === e && (f = d.downloadedPlaylists); if (null == (h = f) ? 0 : h.length) for (l = 0; l < f.length; l++)if (m = f[l], m === b) { f.splice(l, 1); break } return g.z(n, b7(a, d, "musicDownloadsLibraryEntity"), 0) })
        }, Rxb = function (a) {
            var b = a.videos;
            a = []; var c = []; if (b) { b = g.u(b); for (var d = b.next(); !d.done; d = b.next()) { var e = d.value.offlineVideoData.videoId; d = g.gP(e, "musicTrack"); e = g.gP(e, "musicTrackDownloadMetadataEntity"); a.push(d); c.push(e) } } return { b0: a, Z_: c }
        }, X7 = function (a, b, c) {
            b = { track: Oxb(b) };
            c && (b.playlistId = c); if (a = g.U(a.actionMetadata, Sxb)) b.maximumDownloadQuality = a.maximumDownloadQuality; return { musicTrackEntityActionMetadata: b }
        }, Txb = function (a, b) {
            this.j = a;
            this.C = b
        }, Vxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E;
            return g.H(function (F) {
                switch (F.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, f = [], g.Ba(F, 2), g.z(F, Uxb(a, e), 4); case 4: f = F.B; if (null == (h = f) || !h.length) { F.La(5); break } return g.z(F, Pxb(a.j, b.entityKey), 5); case 5: g.Ca(F, 3); break; case 2: return l = g.Da(F), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.KD && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                        F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n)); case 3: return p = [], g.z(F, qvb(a.j, "musicTrack", f), 7); case 7: f = F.B; if (f.length) for (q = g.u(f), r = q.next(); !r.done; r = q.next())if (t = r.value, v = t.offlineVideoData, x = void 0, null == (x = v) ? 0 : x.videoId) B = void 0, E = Number((null == (B = b.actionMetadata) ? void 0 : B.priority) || 0) + 1, p.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", v.videoId, "musicTrack", E, Y7, X7(b, v, e))); return F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p))
                }
            })
        },
        Wxb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb, Qa, Xa, Za, rb, ib, A, C, D, J, K, aa, qa, ia, L, X, ya, xa, ab, Wa, xb, Qb, eb, Ub, Vb, Ac;
            return g.H(function (Yb) {
                switch (Yb.j) {
                    case 1: return c = n7(b), d = b.entityKey, e = g.fP(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Yb, d7(a.j, "musicAlbumRelease"), 5)) : g.z(Yb, c7(a.j, d, "musicAlbumRelease"), 4); case 4: (l = Yb.B) && f.push(l); Yb.La(3); break; case 5: f = Yb.B; case 3: if (null == (m = f) || !m.length) return Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); if (h) {
                        n = []; p = g.u(f); for (q = p.next(); !q.done; q = p.next())r = q.value, t = g.fP(r.id).entityId, n.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH",
                            t, "musicAlbumRelease", 0, Y7)); return Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, n))
                    } v = []; x = f[0]; B = void 0; if (!x.downloadMetadata) { Yb.La(6); break } return g.z(Yb, c7(a.j, x.downloadMetadata, "musicAlbumReleaseDownloadMetadataEntity"), 7); case 7: E = Yb.B, B = Number(null != (G = null == (F = E) ? void 0 : F.addedTimestampMillis) ? G : "0") / 1E3; case 6: return g.Ba(Yb, 8), g.z(Yb, Uxb(a, e, null == (P = B) ? void 0 : P.toString()), 10); case 10: v = Yb.B; g.Ca(Yb, 9); break; case 8: Q = g.Da(Yb); if (!(Q instanceof Error && "No data" ===
                        Q.message)) { if (Q instanceof Error && "Empty response body" === Q.message) i7(Q.message); else return R = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", ha = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Q instanceof g.KD && "QUOTA_EXCEEDED" === Q.type && (R = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", ha = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, R, ha)); Yb.La(9); break } return g.z(Yb, V7(e, "musicAlbumRelease",
                            a.j, b, a.C), 9); case 9: wa = []; ua = new Map; if (null == (ma = v) ? 0 : ma.length) for (sa = g.u(v), da = sa.next(); !da.done; da = sa.next())ba = da.value, La = ba.offlineVideoData, y = void 0, (null == (y = La) ? 0 : y.videoId) && ua.set(La.videoId, La); Z = new Map; Ta = []; if (null == (db = x) ? 0 : null == (nb = db.tracks) ? 0 : nb.length) for (Qa = g.u(x.tracks), Xa = Qa.next(); !Xa.done; Xa = Qa.next())if (Za = Xa.value, rb = g.fP(Za).entityId) ua.has(rb) ? (Z.set(rb, ua.get(rb)), ua.delete(rb)) : Ta.push(rb); A = Number((null == (ib = b.actionMetadata) ? void 0 : ib.priority) || 0) + 1; C = g.u(ua.entries());
                        for (D = C.next(); !D.done; D = C.next())J = D.value, K = g.u(J), aa = K.next().value, qa = K.next().value, ia = aa, L = qa, wa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", ia, "musicTrack", A, Y7, X7(b, L))); X = g.u(Z.entries()); for (ya = X.next(); !ya.done; ya = X.next())xa = ya.value, ab = g.u(xa), Wa = ab.next().value, xb = ab.next().value, Qb = Wa, eb = xb, wa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Qb, "musicTrack", A, Y7, X7(b, eb))); Ub = g.u(Ta); for (Vb = Ub.next(); !Vb.done; Vb = Ub.next())Ac = Vb.value, wa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                            Ac, "musicTrack", 0, Y7)); return Yb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, wa))
                }
            })
        }, Xxb = function (a, b) {
            var c, d;
            return g.H(function (e) {
                switch (e.j) {
                    case 1: return c = n7(b), g.Ba(e, 2), d = g.fP(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, W7(a.j, b, a.C), 5) : g.z(e, V7(d, "musicAlbumRelease", a.j, b, a.C), 6); case 6: return g.z(e, Qxb(a.j, b.entityKey), 5); case 5: g.Ca(e, 3); break; case 2: return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                        c))
                }
            })
        }, Uxb = function (a, b, c) {
            var d, e, f;
            return g.H(function (h) { switch (h.j) { case 1: return g.z(h, dxb([b]), 2); case 2: return d = h.B, g.z(h, Yxb(a, d[0], c), 3); case 3: return e = h.B, f = u7(e.thumbnailDetails), g.z(h, z7(f), 4); case 4: return h.return(d[0].videos) } })
        }, Yxb = function (a, b, c) {
            var d, e, f, h, l, m, n, p, q, r, t, v, x, B;
            return g.H(function (E) {
                if (1 == E.j) {
                    d = b.additionalMetadadatas; e = void 0; if (d && 0 < d.length) for (f = g.u(d), h = f.next(); !h.done; h = f.next())if (l = h.value, l.offlineMusicPlaylistData) { e = l.offlineMusicPlaylistData; break } m = b.playlistId; n = Rxb(b); p = n.b0; q = n.Z_; r = c ? (1E3 * Number(c)).toString() : Date.now().toString(); t = b.lastModifiedTimestamp ? (1E3 * Number(b.lastModifiedTimestamp)).toString() : "0"; v = {
                        id: g.gP(m, "musicAlbumReleaseDownloadMetadataEntity"), trackDownloadMetadatas: q, lastModifiedTimestampMillis: t, addedTimestampMillis: r,
                        syncState: "DOWNLOAD_SYNC_STATE_UP_TO_DATE"
                    }; x = { id: g.gP(m, "musicAlbumRelease"), title: b.title, audioPlaylistId: m, trackCount: b.totalVideoCount, tracks: p, downloadMetadata: v.id }; e && (x.thumbnailDetails = null != (B = e.albumHqThumbnail) ? B : e.albumArtistThumbnail, x.artistDisplayName = e.albumArtistDisplayName, x.releaseDate = e.albumReleaseDate, x.contentRating = { explicitType: e.albumReleaseExplicitType }, x.releaseType = e.albumReleaseType); return g.z(E, a7(a.j, { mode: "readwrite", Tb: !0 }, function (F) {
                        var G = X6(F, x, "musicAlbumRelease");
                        F = X6(F, v, "musicAlbumReleaseDownloadMetadataEntity"); return g.PD.all([G, F])
                    }), 2)
                } return E.return(x)
            })
        }, Zxb = function (a, b) {
            this.j = a;
            this.C = b
        }, ayb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E;
            return g.H(function (F) {
                switch (F.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, f = [], g.Ba(F, 2), g.z(F, $xb(a, e), 4); case 4: f = F.B; if (null == (h = f) || !h.length) { F.La(5); break } return g.z(F, Pxb(a.j, b.entityKey), 5); case 5: g.Ca(F, 3); break; case 2: return l = g.Da(F), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.KD && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                        F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n)); case 3: return p = [], g.z(F, qvb(a.j, "musicTrack", f), 7); case 7: f = F.B; if (f.length) for (q = g.u(f), r = q.next(); !r.done; r = q.next())if (t = r.value, v = t.offlineVideoData, x = void 0, null == (x = v) ? 0 : x.videoId) B = void 0, E = Number((null == (B = b.actionMetadata) ? void 0 : B.priority) || 0) + 1, p.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", v.videoId, "musicTrack", E, Z7, X7(b, v, e))); return F.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p))
                }
            })
        },
        byb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb, Qa, Xa, Za, rb, ib, A, C, D, J, K, aa, qa, ia, L, X, ya, xa, ab, Wa, xb, Qb, eb, Ub, Vb, Ac, Yb, wc, Pc, Gc, Hc, Xc, Rb, td, ud, vd, yb, Bc;
            return g.H(function (Fb) {
                switch (Fb.j) {
                    case 1: return c = n7(b), d = b.entityKey, e = g.fP(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Fb, d7(a.j, "musicPlaylist"), 5)) : g.z(Fb, c7(a.j, d, "musicPlaylist"), 4); case 4: (l = Fb.B) && f.push(l); Fb.La(3); break; case 5: f = Fb.B; case 3: if (null == (m = f) || !m.length) return Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); n = g.U(b.actionMetadata, Sxb); q = null == (p = n) ? void 0 : p.autoSync; r = []; v = t = !0; x = !1; B = void 0; if (!h && !1 === q) { Fb.La(6); break } g.Ba(Fb, 7); return g.z(Fb,
                        jxb(!!q, f), 9); case 9: r = Fb.B; g.Ca(Fb, 8); break; case 7: E = g.Da(Fb); if (!(E instanceof Error && "No data" === E.message)) { E instanceof Error && "Empty response body" === E.message && i7(E.message); Fb.La(8); break } return "!*$_ALL_ENTITIES_!*$" === e ? g.z(Fb, W7(a.j, b, a.C), 8) : g.z(Fb, V7(e, "musicPlaylist", a.j, b, a.C), 8); case 8: if (!r.length || !h && r[0].playlistId !== e) return Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); case 6: if (h) {
                            F = []; G = g.u(r); for (P = G.next(); !P.done; P = G.next())Q = P.value, Q.upToDate || q && !Q.shouldAutoSyncMetadata ||
                                !Q.playlistId || (R = { autoSync: q }, F.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Q.playlistId, "musicPlaylist", 0, Z7, { musicPlaylistEntityActionMetadata: R }))); return Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, F))
                        } r.length && (ha = r[0], x = !!ha.upToDate, q && (t = null != (wa = ha.shouldAutoSyncMetadata) ? wa : !0, v = null != (ua = ha.shouldAutoSyncVideos) ? ua : !0, ha.checkInSeconds && (B = ha.checkInSeconds))); if (x || !t) return Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); ma = []; sa = f[0];
                        da = void 0; if (!sa.downloadMetadata) { Fb.La(15); break } return g.z(Fb, c7(a.j, sa.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 16); case 16: ba = Fb.B, da = Number(null != (y = null == (La = ba) ? void 0 : La.addedTimestampMillis) ? y : "0") / 1E3; case 15: return g.Ba(Fb, 17), g.z(Fb, $xb(a, e, null == (Z = da) ? void 0 : Z.toString(), B), 19); case 19: ma = Fb.B; g.Ca(Fb, 18); break; case 17: Ta = g.Da(Fb); if (!(Ta instanceof Error && "No data" === Ta.message)) {
                            if (Ta instanceof Error && "Empty response body" === Ta.message) i7(Ta.message); else return db =
                                "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Ta instanceof g.KD && "QUOTA_EXCEEDED" === Ta.type && (db = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", nb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, db, nb)); Fb.La(18); break
                        } return g.z(Fb, V7(e, "musicPlaylist", a.j, b, a.C), 18); case 18: if (!v) return Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c)); Qa = []; Xa = new Map; if (null == (Za = ma) ? 0 : Za.length) for (rb = g.u(ma), ib = rb.next(); !ib.done; ib = rb.next())A = ib.value, C = A.offlineVideoData, D = void 0, (null == (D = C) ? 0 : D.videoId) && Xa.set(C.videoId, C); J = new Map; K = []; if (null == (aa = sa) ? 0 : null == (qa = aa.tracks) ? 0 : qa.length) for (ia = g.u(sa.tracks), L = ia.next(); !L.done; L = ia.next())if (X = L.value, ya = g.fP(X).entityId) Xa.has(ya) ? (J.set(ya, Xa.get(ya)), Xa.delete(ya)) : K.push(ya); ab = Number((null == (xa = b.actionMetadata) ? void 0 : xa.priority) || 0) + 1; Wa = g.u(Xa.entries()); for (xb = Wa.next(); !xb.done; xb =
                                Wa.next())Qb = xb.value, eb = g.u(Qb), Ub = eb.next().value, Vb = eb.next().value, Ac = Ub, Yb = Vb, Qa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", Ac, "musicTrack", ab, Z7, X7(b, Yb))); wc = g.u(J.entries()); for (Pc = wc.next(); !Pc.done; Pc = wc.next())Gc = Pc.value, Hc = g.u(Gc), Xc = Hc.next().value, Rb = Hc.next().value, td = Xc, ud = Rb, Qa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", td, "musicTrack", ab, Z7, X7(b, ud))); vd = g.u(K); for (yb = vd.next(); !yb.done; yb = vd.next())Bc = yb.value, Qa.push(E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                                    Bc, "musicTrack", 0, Z7)); return Fb.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, Qa))
                }
            })
        }, cyb = function (a, b) {
            var c, d;
            return g.H(function (e) {
                switch (e.j) {
                    case 1: return c = n7(b), g.Ba(e, 2), d = g.fP(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, W7(a.j, b, a.C), 5) : g.z(e, V7(d, "musicPlaylist", a.j, b, a.C), 6); case 6: return g.z(e, Qxb(a.j, b.entityKey), 5); case 5: g.Ca(e, 3); break; case 2: return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                        c))
                }
            })
        }, $xb = function (a, b, c, d) {
            var e, f, h;
            return g.H(function (l) { switch (l.j) { case 1: return g.z(l, dxb([b]), 2); case 2: return e = l.B, g.z(l, dyb(a, e[0], c, d), 3); case 3: return f = l.B, h = u7(f.thumbnailDetails), g.z(l, z7(h), 4); case 4: return l.return(e[0].videos) } })
        }, dyb = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, r;
            return g.H(function (t) {
                return 1 == t.j ? (e = b.playlistId, f = Rxb(b), h = f.b0, l = f.Z_, m = c ? (1E3 * Number(c)).toString() : Date.now().toString(), n = b.lastModifiedTimestamp ? (1E3 * Number(b.lastModifiedTimestamp)).toString() : "0", p = { id: g.gP(e, "musicPlaylistDownloadMetadataEntity"), trackDownloadMetadatas: l, lastModifiedTimestampMillis: n, addedTimestampMillis: m, syncState: "DOWNLOAD_SYNC_STATE_UP_TO_DATE" }, q = {
                    id: g.gP(e, "musicPlaylist"), title: b.title, playlistId: e, thumbnailDetails: b.thumbnail, visibility: eyb(b), trackCount: b.totalVideoCount,
                    tracks: h, downloadMetadata: p.id
                }, d && ((null == (r = q) ? 0 : r.entityMetadata) ? q.entityMetadata.nextAutoRefreshIntervalSeconds = String(d) : q && (q.entityMetadata = { nextAutoRefreshIntervalSeconds: String(d) })), g.z(t, a7(a.j, { mode: "readwrite", Tb: !0 }, function (v) { var x = X6(v, q, "musicPlaylist"); v = X6(v, p, "musicPlaylistDownloadMetadataEntity"); return g.PD.all([x, v]) }), 2)) : t.return(q)
            })
        }, eyb = function (a) {
            switch (a.privacy) {
                case "PRIVATE": return "PLAYLIST_ENTITY_VISIBILITY_PRIVATE";
                case "PUBLIC": return "PLAYLIST_ENTITY_VISIBILITY_PUBLIC"; case "UNLISTED": return "PLAYLIST_ENTITY_VISIBILITY_UNLISTED"; default: return "PLAYLIST_ENTITY_VISIBILITY_UNKNOWN"
            }
        }, fyb = function (a, b) {
            this.j = a;
            this.C = b
        }, jyb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v;
            return g.H(function (x) {
                switch (x.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, f = g.U(b.actionMetadata, gyb), g.Ba(x, 2), g.z(x, hyb(a, e, void 0, null == (h = f) ? void 0 : h.track, null == (l = f) ? void 0 : l.albumRelease), 4); case 4: if (null == (m = f) ? 0 : m.playlistId) { x.La(5); break } return g.z(x, Pxb(a.j, b.entityKey), 5); case 5: g.Ca(x, 3); break; case 2: return n = g.Da(x), p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.KD && "QUOTA_EXCEEDED" === n.type &&
                        (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, p, q)); case 3: t = Number((null == (r = b.actionMetadata) ? void 0 : r.priority) || 0) + 1; var B = (B = g.U(b.actionMetadata, gyb)) ? { playbackDataActionMetadata: { maximumDownloadQuality: B.maximumDownloadQuality } } : void 0; v = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", t, iyb, B); return x.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c, [v]))
                }
            })
        }, kyb = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, r, t, v, x, B;
            return g.H(function (E) {
                switch (E.j) {
                    case 1: return c = n7(b), d = g.fP(b.entityKey), e = d.entityId, g.z(E, c7(a.j, b.entityKey, "musicTrack"), 2); case 2: f = E.B; if (!f) { h = void 0; E.La(3); break } return g.z(E, c7(a.j, f.downloadMetadata, "musicTrackDownloadMetadataEntity"), 4); case 4: h = E.B; case 3: l = h; if (!f || !l) return E.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); n = g.U(b.actionMetadata, gyb); g.Ba(E, 5); return g.z(E, hyb(a, e, l.addedTimestampMillis, null == (p = n) ? void 0 : p.track, null == (q = n) ? void 0 : q.albumRelease),
                        7); case 7: t = Number((null == (r = b.actionMetadata) ? void 0 : r.priority) || 0) + 1; m = E7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", t, iyb); g.Ca(E, 6); break; case 5: v = g.Da(E); if (!(v instanceof Error && "No data" === v.message)) {
                            if (v instanceof Error && "Empty response body" === v.message) i7(v.message); else return x = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", B = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", v instanceof g.KD && "QUOTA_EXCEEDED" === v.type && (x = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED",
                                B = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), E.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, x, B)); E.La(6); break
                        } return g.z(E, Lxb(e, a.j, b, a.C), 6); case 6: return E.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, m ? [m] : void 0))
                }
            })
        }, lyb = function (a, b) {
            var c, d;
            return g.H(function (e) {
                switch (e.j) {
                    case 1: return c = n7(b), g.Ba(e, 2), d = g.fP(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, W7(a.j, b, a.C), 5) : g.z(e, Lxb(d, a.j, b, a.C), 6); case 6: return g.z(e, Qxb(a.j, b.entityKey), 5); case 5: g.Ca(e, 3); break; case 2: return g.Da(e), e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new F7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                        c))
                }
            })
        }, hyb = function (a, b, c, d, e) {
            var f, h, l, m, n, p;
            return g.H(function (q) { switch (q.j) { case 1: if (f = d) { q.La(2); break } return g.z(q, cxb([b]), 3); case 3: h = q.B, l = h[0], f = Oxb(l); case 2: return g.z(q, myb(a, f, b, e, c), 4); case 4: m = q.B; n = m.musicTrackEntity; p = m.b5; var r = u7(n.thumbnailDetails), t = []; p && (t = u7(p.thumbnailDetails)); return g.z(q, z7(r.concat(t)), 0) } })
        }, myb = function (a, b, c, d, e) {
            var f;
            return g.H(function (h) {
                return 1 == h.j ? (e || (e = Date.now().toString()), f = { id: g.gP(c, "musicTrackDownloadMetadataEntity"), playbackData: g.gP(c, "playbackData"), addedTimestampMillis: e, videoDownloadContextEntity: g.gP(c, "videoDownloadContextEntity") }, d && (b.albumRelease = d.id), g.z(h, a7(a.j, { mode: "readwrite", Tb: !0 }, function (l) { var m = [], n = X6(l, f, "musicTrackDownloadMetadataEntity"); m.push(n); n = X6(l, b, "musicTrack"); m.push(n); d && (l = X6(l, d, "musicAlbumRelease"), m.push(l)); return g.PD.all(m) }), 2)) : 3 != h.j ? g.z(h, r7(c, "musicTrackDownloadMetadataEntity",
                    a.j, "DOWNLOAD_STATE_PENDING_DOWNLOAD"), 3) : h.return({
                        musicTrackEntity: b,
                        b5: d
                    })
            })
        }, $7 = function () {
            R7.apply(this, arguments);
            this.Z = "musicTrack"
        }, nyb = function () {
            g.YV.apply(this, arguments);
            var a = this; this.events = new g.hL(this); this.X = this.player.U(); this.Bd = {
                Mlb: function () { return a.j },
                iI: function () { return a.iI() }
            }
        }, oyb = function (a) {
            var b;
            a = g.U(null == (b = a.getWatchNextResponse()) ? void 0 : b.currentVideoEndpoint, g.CT); if (null == a ? 0 : a.playlistId) var c = a.playlistId; return c
        }, pyb = function (a, b) {
            var c, d, e, f;
            return g.H(function (h) { if (1 == h.j) { c = b.clientPlaybackNonce; d = { cpn: c, offlineSourceVisualElement: g.QF(b.Ba || "").getAsJson(), selectedOfflineMode: "OFFLINE_NOW", isPartialPlayback: !1 }; b.B && (d.videoFmt = Number(b.B.itag)); b.D && (d.audioFmt = Number(b.D.itag)); if ((e = oyb(b)) && b.videoId) { var l = b.videoId; l = "PPSV" !== e ? Promise.resolve(!1) : a.j.RS(l); h = g.z(h, l, 3) } else h = h.La(2); return h } 2 != h.j && (f = h.B) && (d.selectedOfflineMode = "OFFLINE_MODE_TYPE_AUTO_OFFLINE"); a.B = c; g.DD("offlinePlaybackStarted", d); g.Aa(h) })
        };
    g.w(P6, O6); g.fa.Object.defineProperties(P6.prototype, {
        entityMetadata: {
            configurable: !0, enumerable: !0, get: function () { return this.j.entityMetadata },
            set: function (a) { this.j.entityMetadata = a }
        }
    });
    g.w(Esb, P6); Esb.prototype.B = function () { return [] };
    g.w(Fsb, P6); Fsb.prototype.B = function () { var a = []; this.j.alternateChannel && a.push(this.j.alternateChannel); this.j.alternateChannelList && a.push.apply(a, g.oa(this.j.alternateChannelList)); this.j.oneofChannelEntity && a.push(this.j.oneofChannelEntity); return [].concat(g.oa(new Set(a))) };
    g.w(Gsb, P6); Gsb.prototype.B = function () { var a = []; this.j.entryCollection && a.push(this.j.entryCollection); return [].concat(g.oa(new Set(a))) };
    g.w(Hsb, O6); Hsb.prototype.B = function () { var a = []; this.j.video && a.push(this.j.video); return [].concat(g.oa(new Set(a))) };
    g.w(Isb, P6); Isb.prototype.B = function () { var a = []; this.j.parentPlaylist && a.push(this.j.parentPlaylist); if (this.j.entries) for (var b = g.u(this.j.entries), c = b.next(); !c.done; c = b.next())a.push.apply(a, g.oa((new Hsb(c.value)).B())); return [].concat(g.oa(new Set(a))) };
    g.w(Jsb, P6); Jsb.prototype.B = function () { var a = []; this.j.descriptionEntity && a.push(this.j.descriptionEntity); this.j.creators && a.push.apply(a, g.oa(this.j.creators)); this.j.theBiggestFan && a.push(this.j.theBiggestFan); return [].concat(g.oa(new Set(a))) };
    g.w(Ksb, P6); Ksb.prototype.B = function () { return [] };
    g.w(Lsb, P6); Lsb.prototype.B = function () { return [] };
    g.w(Msb, P6); Msb.prototype.B = function () { return [] };
    g.w(Nsb, P6); Nsb.prototype.B = function () { return [] };
    g.w(Osb, P6); Osb.prototype.B = function () { return [] };
    g.w(Psb, P6); Psb.prototype.B = function () { return [] };
    g.w(Qsb, P6); Qsb.prototype.B = function () { return [] };
    g.w(Rsb, P6); Rsb.prototype.B = function () { return [] };
    g.w(Ssb, P6); Ssb.prototype.B = function () { var a = []; this.j.downloadsList && a.push(this.j.downloadsList); this.j.smartDownloadsList && a.push(this.j.smartDownloadsList); this.j.recommendedDownloadsList && a.push(this.j.recommendedDownloadsList); return [].concat(g.oa(new Set(a))) };
    g.w(Tsb, O6); Tsb.prototype.B = function () { var a = []; this.j.video && a.push(this.j.video); this.j.playlist && a.push(this.j.playlist); this.j.videoItem && a.push(this.j.videoItem); this.j.playlistItem && a.push(this.j.playlistItem); return [].concat(g.oa(new Set(a))) };
    g.w(Usb, P6); Usb.prototype.B = function () { var a = []; this.j.refresh && a.push(this.j.refresh); if (this.j.downloads) for (var b = g.u(this.j.downloads), c = b.next(); !c.done; c = b.next())a.push.apply(a, g.oa((new Tsb(c.value)).B())); return [].concat(g.oa(new Set(a))) };
    g.w(Vsb, P6); Vsb.prototype.B = function () { var a = []; this.j.localImageEntities && a.push.apply(a, g.oa(this.j.localImageEntities)); return [].concat(g.oa(new Set(a))) };
    g.w(Wsb, P6); Wsb.prototype.B = function () { var a = []; this.j.playbackData && a.push(this.j.playbackData); this.j.localImageEntities && a.push.apply(a, g.oa(this.j.localImageEntities)); this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity); return [].concat(g.oa(new Set(a))) };
    g.w(Xsb, P6); Xsb.prototype.B = function () { return [] };
    g.w(Ysb, P6); Ysb.prototype.B = function () { var a = []; this.j.fakeChildren && a.push.apply(a, g.oa(this.j.fakeChildren)); return [].concat(g.oa(new Set(a))) };
    g.w(Zsb, P6); Zsb.prototype.B = function () { var a = []; this.j.video && a.push(this.j.video); this.j.playbackData && a.push(this.j.playbackData); this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy); return [].concat(g.oa(new Set(a))) };
    g.w($sb, P6); $sb.prototype.B = function () { return [] };
    g.w(atb, P6); atb.prototype.B = function () { var a = []; this.j.channelOwner && a.push(this.j.channelOwner); this.j.videos && a.push.apply(a, g.oa(this.j.videos)); this.j.collaboratorChannels && a.push.apply(a, g.oa(this.j.collaboratorChannels)); this.j.downloadState && a.push(this.j.downloadState); this.j.refresh && a.push(this.j.refresh); return [].concat(g.oa(new Set(a))) };
    g.w(btb, P6); btb.prototype.B = function () { var a = []; this.j.video && a.push(this.j.video); this.j.channelContributor && a.push(this.j.channelContributor); return [].concat(g.oa(new Set(a))) };
    g.w(ctb, O6); ctb.prototype.B = function () { var a = []; this.j.localImageEntities && a.push.apply(a, g.oa(this.j.localImageEntities)); this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity); return [].concat(g.oa(new Set(a))) };
    g.w(dtb, O6); dtb.prototype.B = function () { var a = []; this.j.recommendedVideoMetadata && a.push.apply(a, g.oa((new ctb(this.j.recommendedVideoMetadata)).B())); return [].concat(g.oa(new Set(a))) };
    g.w(etb, O6); etb.prototype.B = function () { var a = []; this.j.playbackPosition && a.push(this.j.playbackPosition); return [].concat(g.oa(new Set(a))) };
    g.w(ftb, P6); ftb.prototype.B = function () { var a = []; this.j.owner && a.push(this.j.owner); this.j.downloadState && a.push(this.j.downloadState); this.j.userState && a.push.apply(a, g.oa((new etb(this.j.userState)).B())); this.j.additionalMetadata && a.push.apply(a, g.oa((new dtb(this.j.additionalMetadata)).B())); return [].concat(g.oa(new Set(a))) };
    g.w(gtb, P6); gtb.prototype.B = function () { var a = []; this.j.userChannelDetails && a.push(this.j.userChannelDetails); return [].concat(g.oa(new Set(a))) };
    g.w(htb, P6); htb.prototype.B = function () { var a = []; this.j.channelOwner && a.push(this.j.channelOwner); this.j.playbackPosition && a.push(this.j.playbackPosition); this.j.localImageEntities && a.push.apply(a, g.oa(this.j.localImageEntities)); this.j.downloadStatus && a.push(this.j.downloadStatus); return [].concat(g.oa(new Set(a))) };
    g.w(itb, P6); itb.prototype.B = function () { return [] };
    g.w(jtb, P6); jtb.prototype.B = function () { return [] };
    g.w(ktb, P6); ktb.prototype.B = function () { return [] };
    g.w(ltb, P6); ltb.prototype.B = function () { return [] };
    g.w(mtb, P6); mtb.prototype.B = function () { return [] };
    g.w(ntb, P6); ntb.prototype.B = function () { return [] };
    g.w(otb, P6); otb.prototype.B = function () { return [] };
    g.w(ptb, P6); ptb.prototype.B = function () { return [] };
    g.w(qtb, P6); qtb.prototype.B = function () { var a = []; this.j.trackDownloadMetadatas && a.push.apply(a, g.oa(this.j.trackDownloadMetadatas)); return [].concat(g.oa(new Set(a))) };
    g.w(rtb, P6);
    rtb.prototype.B = function () {
        var a = []; this.j.downloadedTracks && a.push.apply(a, g.oa(this.j.downloadedTracks)); this.j.smartDownloadedTracks && a.push.apply(a, g.oa(this.j.smartDownloadedTracks)); this.j.downloadedEpisodes && a.push.apply(a, g.oa(this.j.downloadedEpisodes)); this.j.downloadedAlbumReleases && a.push.apply(a, g.oa(this.j.downloadedAlbumReleases)); this.j.smartDownloadedAlbumReleases && a.push.apply(a, g.oa(this.j.smartDownloadedAlbumReleases)); this.j.downloadedPlaylists && a.push.apply(a, g.oa(this.j.downloadedPlaylists)); this.j.smartDownloadedPlaylists &&
            a.push.apply(a, g.oa(this.j.smartDownloadedPlaylists)); this.j.metadataOnlyTracks && a.push.apply(a, g.oa(this.j.metadataOnlyTracks)); return [].concat(g.oa(new Set(a)))
    };
    g.w(stb, P6); stb.prototype.B = function () { var a = []; this.j.trackDownloadMetadatas && a.push.apply(a, g.oa(this.j.trackDownloadMetadatas)); return [].concat(g.oa(new Set(a))) };
    g.w(ttb, P6); ttb.prototype.B = function () { var a = []; this.j.playbackData && a.push(this.j.playbackData); this.j.localImageEntities && a.push.apply(a, g.oa(this.j.localImageEntities)); this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity); return [].concat(g.oa(new Set(a))) };
    g.w(utb, P6); utb.prototype.B = function () { var a = []; this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity); this.j.primaryArtists && a.push.apply(a, g.oa(this.j.primaryArtists)); this.j.details && a.push(this.j.details); this.j.userDetails && a.push(this.j.userDetails); this.j.tracks && a.push.apply(a, g.oa(this.j.tracks)); this.j.share && a.push(this.j.share); this.j.downloadMetadata && a.push(this.j.downloadMetadata); this.j.refresh && a.push(this.j.refresh); return [].concat(g.oa(new Set(a))) };
    g.w(vtb, P6); vtb.prototype.B = function () { var a = []; this.j.albumRelease && a.push(this.j.albumRelease); this.j.tracks && a.push.apply(a, g.oa(this.j.tracks)); return [].concat(g.oa(new Set(a))) };
    g.w(wtb, P6); wtb.prototype.B = function () { var a = []; this.j.albumRelease && a.push(this.j.albumRelease); return [].concat(g.oa(new Set(a))) };
    g.w(xtb, P6); xtb.prototype.B = function () { var a = []; this.j.details && a.push(this.j.details); this.j.userDetails && a.push(this.j.userDetails); return [].concat(g.oa(new Set(a))) };
    g.w(ytb, P6); ytb.prototype.B = function () { var a = []; this.j.parentArtist && a.push(this.j.parentArtist); return [].concat(g.oa(new Set(a))) };
    g.w(ztb, P6); ztb.prototype.B = function () { var a = []; this.j.parentArtist && a.push(this.j.parentArtist); return [].concat(g.oa(new Set(a))) };
    g.w(Atb, P6); Atb.prototype.B = function () { return [] };
    g.w(Btb, P6); Btb.prototype.B = function () { return [] };
    g.w(Ctb, O6); Ctb.prototype.B = function () { var a = []; this.j.creatorEntity && a.push(this.j.creatorEntity); return [].concat(g.oa(new Set(a))) };
    g.w(Dtb, P6);
    Dtb.prototype.B = function () {
        var a = []; this.j.tracks && a.push.apply(a, g.oa(this.j.tracks)); this.j.refresh && a.push(this.j.refresh); this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity); this.j.details && a.push(this.j.details); this.j.downloadMetadata && a.push(this.j.downloadMetadata); this.j.sideloadMetadata && a.push(this.j.sideloadMetadata); this.j.userDetails && a.push(this.j.userDetails); this.j.entryCollection && a.push(this.j.entryCollection); this.j.share && a.push(this.j.share); this.j.podcastShowAdditionalMetadata &&
            a.push.apply(a, g.oa((new Ctb(this.j.podcastShowAdditionalMetadata)).B())); return [].concat(g.oa(new Set(a)))
    };
    g.w(Etb, P6); Etb.prototype.B = function () { return [] };
    g.w(Ftb, P6);
    Ftb.prototype.B = function () {
        var a = []; this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity); this.j.artists && a.push.apply(a, g.oa(this.j.artists)); this.j.audioModeVersion && a.push(this.j.audioModeVersion); this.j.videoModeVersion && a.push(this.j.videoModeVersion); this.j.userDetails && a.push(this.j.userDetails); this.j.details && a.push(this.j.details); this.j.albumRelease && a.push(this.j.albumRelease); this.j.share && a.push(this.j.share); this.j.libraryEdit && a.push(this.j.libraryEdit); this.j.downloadMetadata &&
            a.push(this.j.downloadMetadata); this.j.playbackPosition && a.push(this.j.playbackPosition); return [].concat(g.oa(new Set(a)))
    };
    g.w(Gtb, P6); Gtb.prototype.B = function () { var a = []; this.j.parentTrack && a.push(this.j.parentTrack); return [].concat(g.oa(new Set(a))) };
    g.w(Htb, P6); Htb.prototype.B = function () { var a = []; this.j.parentTrack && a.push(this.j.parentTrack); return [].concat(g.oa(new Set(a))) };
    g.w(Itb, P6); Itb.prototype.B = function () { return [] };
    g.w(Jtb, P6); Jtb.prototype.B = function () { return [] };
    g.w(Ktb, P6); Ktb.prototype.B = function () { return [] };
    g.w(Ltb, P6); Ltb.prototype.B = function () { return [] };
    g.w(Mtb, P6); Mtb.prototype.B = function () { var a = []; this.j.transfer && a.push(this.j.transfer); this.j.adsPlaybackData && a.push.apply(a, g.oa(this.j.adsPlaybackData)); this.j.drmLicense && a.push(this.j.drmLicense); this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy); this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity); return [].concat(g.oa(new Set(a))) };
    g.w(Ntb, P6); Ntb.prototype.B = function () { return [] };
    g.w(Otb, P6); Otb.prototype.B = function () { var a = []; this.j.offlineVideoStreams && a.push.apply(a, g.oa(this.j.offlineVideoStreams)); this.j.captionTrack && a.push.apply(a, g.oa(this.j.captionTrack)); return [].concat(g.oa(new Set(a))) };
    g.w(Ptb, P6); Ptb.prototype.B = function () { return [] };
    g.w(Qtb, P6); Qtb.prototype.B = function () { return [] };
    g.w(Rtb, P6); Rtb.prototype.B = function () { return [] };
    g.w(Stb, P6); Stb.prototype.B = function () { return [] };
    g.w(Ttb, P6); Ttb.prototype.B = function () { return [] };
    g.w(Utb, P6); Utb.prototype.B = function () { return [] };
    g.w(Vtb, P6); Vtb.prototype.B = function () { return [] };
    g.w(Wtb, P6); Wtb.prototype.B = function () { return [] };
    g.w(Xtb, P6); Xtb.prototype.B = function () { return [] };
    g.w(Ytb, P6); Ytb.prototype.B = function () { return [] };
    g.w(Ztb, P6); Ztb.prototype.B = function () { return [] };
    g.w($tb, P6); $tb.prototype.B = function () { return [] };
    var kxb = ["browse", "music/browse", "unplugged/browse"], lxb = ["offline/playlist_sync_check"], bxb = ["offline"], Pvb = ["offline/get_playback_data_entity"]; Q6.getInstance = function () { return g.H(function (a) { return a.return(new Promise(function (b) { g.jE().then(function (c) { c ? (Q6.instance || (Q6.instance = new Q6(c)), b(Q6.instance)) : b(void 0) }) })) }) };
    Q6.prototype.get = function (a) { var b = this, c, d, e; return g.H(function (f) { if (1 == f.j) return g.z(f, aub(b.token), 2); if (3 != f.j) return c = f.B, g.z(f, c.get("prefs", a), 3); d = f.B; if (!d) return f.return(); e = (0, g.SD)(); return d.expirationTimestampMs <= e ? f.return() : f.return(d.value) }) };
    Q6.prototype.set = function (a, b, c) { c = void 0 === c ? 31536E3 : c; var d = this, e, f, h; return g.H(function (l) { if (1 == l.j) return e = (0, g.SD)(), f = { key: a, value: b, expirationTimestampMs: e + 1E3 * c }, g.z(l, aub(d.token), 2); h = l.B; return g.z(l, g.XD(h, "prefs", f), 0) }) };
    Q6.prototype.remove = function (a) { var b = this, c; return g.H(function (d) { if (1 == d.j) return g.z(d, aub(b.token), 2); c = d.B; return g.z(d, c.delete("prefs", a), 0) }) };
    var R6; g.w(S6, g.rD); g.w(T6, iub); T6.prototype.C = function (a, b) { b = kub(b); a = (new TextEncoder).encode(JSON.stringify(a)); return this.j.encrypt(a, b) };
    T6.prototype.B = function (a, b) { if (!(a instanceof Uint8Array)) throw eub(1); var c = new TextDecoder; b = kub(b); a = this.j.decrypt(a, b); return JSON.parse(c.decode(a)) };
    var lub = {
        buttonEntity: Vtb, captionTrack: Itb, channelHandle: Esb, commerceAcquisitionClientPayloadEntity: Xtb, commerceCartListEntity: Ytb, continuationTokenEntity: $sb, downloadQualityPickerEntity: Psb, downloadsPageRefreshTokenEntity: Rsb, downloadsPageViewConfigurationEntity: itb, downloadStatusEntity: Qsb, emojiFountainDataEntity: Utb, emojiCustomizationSetEntity: Ttb, fakeChannel: Fsb, fakePlaylist: Gsb, fakePlaylistEntryCollection: Isb, fakeVideo: Jsb, fakeVideoDescription: Ksb, featuredProductsEntity: ntb, flowStateEntity: Lsb,
        iconBadgeEntity: Ztb, interstitialInteractionStateEntity: Nsb, liveChatPollStateEntity: Osb, logoEntity: Msb, macroMarkerEntity: jtb, mainDownloadsLibraryEntity: Ssb, mainDownloadsListEntity: Usb, mainPlaylistDownloadStateEntity: Vsb, mainPlaylistEntity: atb, mainPlaylistVideoEntity: btb, mainVideoDownloadStateEntity: Wsb, mainVideoEntity: ftb, markersEngagementPanelSyncEntity: ktb, markersVisibilityOverrideEntity: ltb, musicAlbumReleaseDetail: vtb, musicAlbumReleaseDownloadMetadataEntity: qtb, musicAlbumRelease: utb, musicAlbumReleaseUserDetail: wtb,
        musicArtistDetail: ytb, musicArtist: xtb, musicArtistUserDetail: ztb, musicDownloadsLibraryEntity: rtb, musicLibraryEdit: Atb, musicLibraryStatusEntity: Btb, musicPlaylist: Dtb, musicPlaylistDownloadMetadataEntity: stb, musicShare: Etb, musicTrackDetail: Gtb, musicTrackDownloadMetadataEntity: ttb, musicTrack: Ftb, musicTrackUserDetail: Htb, offlineOrchestrationActionWrapperEntity: Jtb, offlineVideoPolicy: Ktb, offlineVideoStreams: Ltb, offlineabilityEntity: Xsb, orchestrationWebSamplingEntity: Ysb, pageHeaderEntity: Stb, pinnedProductEntity: otb,
        playbackData: Mtb, playerStateEntity: mtb, quantityIncrementerEntity: $tb, refresh: Ntb, saveToPlaylistListEntity: Qtb, settingEntity: Rtb, transfer: Otb, trendingOfferEntity: ptb, videoDownloadContextEntity: Ptb, videoPlaybackPositionEntity: Wtb, ytMainChannelEntity: gtb, ytMainDownloadedVideoEntity: Zsb, ytMainVideoEntity: htb
    }; g.w(Z6, iub); Z6.prototype.C = function (a) { return a };
    Z6.prototype.B = function (a) { if (a instanceof Uint8Array) throw eub(0); return a };
    g.w($6, g.I); $6.prototype.B = function (a) { zub(this, a.data) };
    $6.prototype.xa = function () { this.channel.close() };
    var Eub; var Bvb = new g.Mw("elementsCommand"); var B7 = new g.Mw("entityBatchUpdate"); var pvb = new g.Mw("downloadStatusEntity"); var qxb = new g.Mw("mainPlaylistEntityActionMetadata"); var U7 = new g.Mw("mainVideoEntityActionMetadata"); var Sxb = new g.Mw("musicPlaylistEntityActionMetadata"); var gyb = new g.Mw("musicTrackEntityActionMetadata"); var Cvb = new g.Mw("offlineOrchestrationActionCommand"); var Fxb = new g.Mw("localImageEntityActionMetadata"); var G7 = new g.Mw("playbackDataActionMetadata"); var Vvb = new g.Mw("transferEntityActionMetadata"); g.gP("", "downloadsPageViewConfigurationEntity"); g.gP("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"); var C7 = g.gP("DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", "mainDownloadsListEntity"); g.gP("DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", "refresh"); g.gP("SMART_DOWNLOADS_ENABLED", "settingEntity"); g.gP("SMART_DOWNLOADS_OPT_IN_BANNER_DISMISSED", "settingEntity"); var Uub; new g.go; new g.go; Zub.prototype.request = function (a, b, c) { b = void 0 === b ? {} : b; return this.locks.request(a, b, function (d) { return c(d) }) }; var h7 = g.Sa.caches, g7, dvb; f7.prototype.open = function (a) { return h7.open(bvb(a)) };
    f7.prototype.has = function (a) { return h7.has(bvb(a)) };
    f7.prototype.delete = function (a) { return h7.delete(bvb(a)) };
    f7.prototype.match = function (a, b) { var c = this, d, e, f, h, l, m; return g.H(function (n) { switch (n.j) { case 1: return g.z(n, c.keys(), 2); case 2: d = n.B, e = g.u(d), f = e.next(); case 3: if (f.done) { n.La(5); break } h = f.value; return g.z(n, c.open(h), 6); case 6: return l = n.B, g.z(n, l.match(a, b), 7); case 7: if (m = n.B) return n.return(m); f = e.next(); n.La(3); break; case 5: return n.return() } }) };
    g.w(avb, f7); avb.prototype.keys = function () { var a, b, c, d, e, f, h, l, m; return g.H(function (n) { if (1 == n.j) return a = [], b = g.sD("CacheStorage keys"), g.z(n, h7.keys(), 2); c = n.B; d = g.u(c); for (e = d.next(); !e.done; e = d.next()) { f = e.value; var p = f.indexOf(":"); h = -1 === p ? { DJ: f } : { DJ: f.substring(0, p), datasyncId: f.substring(p + 1) }; l = h.DJ; m = h.datasyncId; m === b && a.push(l) } return n.return(a) }) }; g.w(j7, g.I); j7.prototype.C = function (a) { this.api.ib("onOfflineOperationFailure", a.data) };
    j7.prototype.D = function (a) { this.api.oa("offlinetransferpause", a.data) };
    j7.prototype.xa = function () { var a; null == (a = this.j) || a.close(); var b; null == (b = this.B) || b.close() }; gvb.prototype.og = function () { this.j && l7(this) };
    gvb.prototype.ZJ = function () { this.B && this.B.resolve(); this.C = this.j = !1; this.W() }; var kwb = ["OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"]; var yvb = "captionTrack downloadStatusEntity ytMainChannelEntity mainPlaylistEntity mainPlaylistDownloadStateEntity mainPlaylistVideoEntity mainVideoEntity mainVideoDownloadStateEntity offlineVideoPolicy offlineVideoStreams playbackData transfer videoDownloadContextEntity".split(" "); g.w(Jvb, D7); Jvb.prototype.B = function (a) { return o7(a) ? Nvb(this, a) : p7(a) ? Ovb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) }; g.w(Qvb, D7); Qvb.prototype.B = function (a) { return o7(a) ? Svb(this, a) : p7(a) ? Tvb(this, a) : "OFFLINE_ORCHESTRATION_ACTION_TYPE_UPDATE" === a.actionType && a.entityKey ? Uvb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) }; $vb.prototype.j = function (a, b) { var c = a.action.actionMetadata.priority - b.action.actionMetadata.priority; 0 === c && (a.j < b.j ? c = -1 : a.j > b.j && (c = 1)); return c }; g.w(I7, g.I); I7.prototype.xa = function () { this.W && this.W(); g.I.prototype.xa.call(this) };
    I7.prototype.createAction = function (a, b) { var c = g.fP(a.entityKey).entityType, d = g.hF(16); return new v7(c, d, a, b.actionId, b.rootActionId) };
    I7.prototype.ra = function (a) { var b = this, c, d, e, f, h, l, m, n, p; return g.H(function (q) { if (1 == q.j) { if (b.isDisposed()) return q.return(); d = null != (c = a.offlineOrchestrationActionWrapperEntity) ? c : new Set; e = []; f = g.u(d); for (h = f.next(); !h.done; h = f.next())l = h.value, m = g.fP(l), n = m.entityId, cwb(b.j, n) || e.push(l); return g.z(q, nwb(b, e), 2) } p = q.B; return g.z(q, mwb(b, p), 0) }) };
    I7.prototype.retry = function () { var a = this; return g.H(function (b) { return g.z(b, owb(a), 0) }) }; g.k = uwb.prototype; g.k.D9 = function (a) { var b = this, c, d, e, f; return g.H(function (h) { if (!g.kH(a.state, 128)) return h.La(0); c = a.state.lh; var l = null == (d = c) ? void 0 : d.errorCode, m = null == (e = c) ? void 0 : e.wH; f = "net.connect" === l && 1 === m ? "TRANSFER_FAILURE_REASON_NETWORK_LOST" : (null == l ? 0 : l.startsWith("net.")) ? "TRANSFER_FAILURE_REASON_NETWORK" : "TRANSFER_FAILURE_REASON_INTERNAL"; return g.z(h, b.Cw(b.player.getVideoData().videoId, f), 0) }) };
    g.k.Cw = function (a, b) { var c = this; return g.H(function (d) { if (1 == d.j) { if (c.B) return d.return(); c.B = !0; return "TRANSFER_FAILURE_REASON_NETWORK_LOST" === b ? (K7(c, a, !1, !0), d.La(0)) : g.z(d, J7(c, a), 3) } g.gT(a, 4); return g.z(d, c.j.Cw(b), 0) }) };
    g.k.sJ = function (a) { 2 === a.status ? (a.status !== this.C && (Nwb(this.j), g.gT(a.videoId, 2)), a.RE && Swb(this.j, a.videoId, a.RE)) : 4 === a.status ? (J7(this, a.videoId), this.Cw(a.videoId, a.pI ? "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" : "TRANSFER_FAILURE_REASON_INTERNAL")) : 1 === a.status && Rwb(this.j); this.C = a.status; this.api.ib("localmediachange", { videoId: a.videoId, status: a.status }) };
    g.k.ZP = function () { var a = this, b; return g.H(function (c) { if (1 == c.j) { if (a.B) return c.return(); a.B = !0; b = a.player.getVideoData().videoId; return g.z(c, J7(a, b), 2) } return g.z(c, a.j.ZP(), 0) }) };
    g.k.ON = function (a) { switch (a) { case "HD_1080": return "hd1080"; case "HD": return "hd720"; case "SD": return "large"; case "LD": return "tiny"; default: return "hd720" } };
    g.k.L = function (a) { return this.api.U().L(a) }; g.w(L7, g.I); L7.prototype.xa = function () { this.B && this.B(); g.I.prototype.xa.call(this) };
    L7.prototype.C = function (a) { var b = this, c, d, e, f, h, l, m, n; return g.H(function (p) { d = null != (c = a.transfer) ? c : new Set; e = []; f = g.u(d); for (h = f.next(); !h.done; h = f.next())l = h.value, m = g.fP(l), n = m.entityId, e.push(n); return 0 === e.length ? p.return() : g.z(p, Bwb(b, e), 0) }) }; g.w(Gwb, g.I); g.k = Gwb.prototype; g.k.xa = function () { this.Ba && this.Ba(); this.Ea.dispose(); this.D.dispose(); this.Na && g.yd(this.K.Tl, this.Na); this.Ka && g.yd(this.K.Tl, this.Ka); g.I.prototype.xa.call(this) };
    g.k.Maa = function (a) {
        var b = this, c, d, e; return g.H(function (f) {
            switch (f.j) {
                case 1: c = g.gP(a, "transfer"); if (b.j && c === b.j.key) { K7(b.N, b.G, !0); b.D.stop(); f.La(0); break } return g.z(f, a7(b.B, { mode: "readwrite", Tb: !0 }, function (h) { return U6(h, c, "transfer").then(function (l) { if (l && "TRANSFER_STATE_COMPLETE" !== l.transferState && "TRANSFER_STATE_FAILED" !== l.transferState) return l.transferState = "TRANSFER_STATE_PAUSED_BY_USER", X6(h, l, "transfer").then(function () { return l }) }) }), 3);
                case 3: d = f.B; if (!d) { f.La(0); break } if (!a || !b.C) { f.La(5); break } return g.z(f, r7(a, b.C, b.B, "DOWNLOAD_STATE_PAUSED"), 5); case 5: return g.z(f, O7(b, a), 7); case 7: e = f.B, nvb({ videoId: a, yl: d, offlineModeType: e }), g.Aa(f)
            }
        })
    };
    g.k.Laa = function () { var a = this; if (this.j && this.G) { K7(this.N, this.G, !1); var b = this.j, c = (null == b ? 0 : b.key) ? g.fP(b.key).entityId : ""; c && this.C && (new Promise(function (d, e) { r7(c, a.C, a.B, "DOWNLOAD_STATE_PAUSED").catch(function (f) { e(f) }) })).catch(function (d) { i7("Download state setting error", d) }) } this.D.stop() };
    g.k.pF = function () { this.j ? Jwb(this, this.j) : N7(this) };
    g.k.o2 = function (a) { var b = this; return g.H(function (c) { switch (c.j) { case 1: if (!b.j) { c.La(2); break } if ("TRANSFER_STATE_COMPLETE" === b.j.transferState || "TRANSFER_STATE_FAILED" === b.j.transferState || !a.transfer || !a.transfer.has(b.j.key)) { c.La(3); break } return g.z(c, c7(b.B, b.j.key, "transfer"), 4); case 4: b.j = c.B; if (b.j) { c.La(3); break } return g.z(c, Kwb(b), 3); case 3: if (b.j) return c.return(); case 2: return g.z(c, N7(b), 0) } }) };
    g.k.Cw = function (a, b) {
        var c = this, d, e, f, h, l; return g.H(function (m) {
            switch (m.j) {
                case 1: if (!c.j) { P7(c, "onTransferFailure: " + a); m.La(2); break } d = c.j; f = (null == (e = d) ? 0 : e.key) ? g.fP(d.key).entityId : ""; a: switch (a) { case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_PLAYABILITY": case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES": var n = !1; break a; default: n = !0 }return n && Twb(c) ? g.z(m, Q7(c, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 8) : g.z(m,
                    Uwb(c, a), 5); case 5: if (!f || !c.C) { m.La(2); break } return g.z(m, r7(f, c.C, c.B, "DOWNLOAD_STATE_FAILED"), 2); case 8: return g.z(m, O7(c, f), 9); case 9: h = m.B; m7({ transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_RETRY" }, { videoId: f, yl: d, offlineModeType: h }); if (!f || !c.C) { m.La(2); break } return g.z(m, r7(f, c.C, c.B, "DOWNLOAD_STATE_RETRYABLE_FAILURE"), 2); case 2: M7(c), l = N7(c, !0), b && b(l), g.Aa(m)
            }
        })
    };
    g.k.ZP = function (a) {
        var b = this, c, d, e, f, h, l, m, n, p, q, r, t; return g.H(function (v) {
            switch (v.j) {
                case 1: if (!b.j) { P7(b, "onMaybeTransferStreamsExpired"); v.La(2); break } return Twb(b) ? g.z(v, Q7(b, "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH"), 9) : g.z(v, Uwb(b, "TRANSFER_FAILURE_REASON_STREAM_MISSING"), 5); case 5: if (!b.C) { v.La(2); break } c = b.j; e = (null == (d = c) ? 0 : d.key) ? g.fP(c.key).entityId : ""; if (!e) { v.La(2); break } return g.z(v, r7(e, b.C, b.B, "DOWNLOAD_STATE_FAILED"), 2); case 9: return b.j || P7(b, "onMaybeTransferStreamsExpiredRetryAttempting"),
                    f = b.j, l = (null == (h = f) ? 0 : h.key) ? g.fP(f.key).entityId : "", g.z(v, O7(b, l), 10); case 10: return m = v.B, m7({ transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_PLAYER_RESPONSE_EXPIRATION" }, { videoId: l, yl: f, offlineModeType: m }), n = svb(), g.hG(n, G7, { isEnqueuedForExpiredStreamUrlRefetch: !0 }), p = g.gP(l, "playbackData"), q = { actionType: "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", entityKey: p, actionMetadata: n }, r = x7(new v7("playbackData", l, q)), g.z(v, b7(b.B, r, "offlineOrchestrationActionWrapperEntity"), 2); case 2: M7(b), t = N7(b, !0),
                        a && a(t), g.Aa(v)
            }
        })
    };
    var qyb = {}, Vwb = (qyb.TRANSFER_STATE_TRANSFERRING = 1, qyb.TRANSFER_STATE_TRANSFER_IN_QUEUE = 2, qyb); g.k = R7.prototype; g.k.OO = function () { return this.D.promise };
    g.k.LR = function () { if (this.B && this.G) return this.D.promise; Ywb(this).then(this.D.resolve).catch(this.D.reject); return this.D.promise };
    g.k.kD = function (a) { var b = {}; return b.playbackData = new Jvb(a, this.X, this.j), b.transfer = new Qvb(a, this.X), b };
    g.k.jR = function () { var a = this; return g.H(function (b) { return a.B ? g.z(b, Hwb(a.B), 0) : b.La(0) }) };
    g.k.OR = function () { var a = this, b, c; return g.H(function (d) { if (1 == d.j) return a.B || a.G ? g.z(d, a.OO(), 2) : d.return(); void 0 !== a.N && (g.qC(a.N), a.N = void 0); null == (b = a.B) || b.dispose(); a.B = void 0; null == (c = a.G) || c.dispose(); a.G = void 0; a.api.ib("onOrchestrationLostLeader"); a.D = new g.go; g.Aa(d) }) };
    g.k.isOrchestrationLeader = function () { return this.C.j };
    g.k.RS = function () { return g.H(function (a) { return a.return(!1) }) };
    g.k.yQ = function (a) { var b = this.j; b.api.oa("offlinetransferpause", a); var c; null == (c = b.B) || c.postMessage(a) };
    g.k.pF = function (a) {
        var b, c; return g.H(function (d) {
            if (1 == d.j) return g.z(d, e7(), 2); b = d.B; if (!b) return d.return(); c = g.gP(a, "transfer"); return g.z(d, a7(b, { mode: "readwrite", Tb: !0 }, function (e) {
                var f = U6(e, c, "transfer"), h = U6(e, g.gP(a, "videoDownloadContextEntity"), "videoDownloadContextEntity"); return g.PD.all([f, h]).then(function (l) {
                    l = g.u(l); var m = l.next().value, n = l.next().value; return m && "TRANSFER_STATE_PAUSED_BY_USER" === m.transferState ? (m.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE", X6(e, m, "transfer").then(function () {
                        m7({
                            transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_USER_RESUME",
                            statusType: "USER_RESUMED"
                        }, { videoId: a, yl: m, offlineModeType: null == n ? void 0 : n.offlineModeType }); return g.PD.resolve(null)
                    })) : g.PD.resolve(null)
                })
            }), 0)
        })
    };
    g.k.SQ = function (a) { a = void 0 === a ? 43200 : a; var b = this, c, d, e, f, h, l, m, n; return g.H(function (p) { if (1 == p.j) return b.K.Nh() ? g.z(p, e7(), 2) : p.return(Zwb()); if (3 != p.j) { c = p.B; if (!c) return p.return([]); d = Date.now() / 1E3; return g.z(p, d7(c, "offlineVideoPolicy"), 3) } e = p.B; f = []; h = g.u(e); for (l = h.next(); !l.done; l = h.next())m = l.value, Number(m.lastUpdatedTimestampSeconds) + a <= d && (n = g.fP(m.key).entityId, f.push(n)); return f.length ? p.return(S7(b, f, b.Z, "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH")) : p.return([]) }) };
    g.k.refreshAllStaleEntities = function (a) { var b = this; return g.H(function (c) { return 1 == c.j ? g.z(c, b.SQ(a), 2) : c.return(c.B) }) };
    g.k.gR = function () { var a = this, b, c, d, e, f, h, l; return g.H(function (m) { if (1 == m.j) return g.z(m, e7(), 2); if (3 != m.j) return (b = m.B) ? g.z(m, d7(b, "transfer"), 3) : m.return([]); c = m.B; d = []; e = g.u(c); for (f = e.next(); !f.done; f = e.next())h = f.value, "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH" === h.transferState && h.key && (l = g.fP(h.key).entityId, d.push(l)); return m.return(axb(a, d)) }) };
    g.k.OM = function () { return g.H(function (a) { return a.return([]) }) };
    g.k.qY = function () { return g.H(function (a) { g.Aa(a) }) }; g.w(mxb, D7); mxb.prototype.B = function (a) { return o7(a) ? pxb(this, a) : p7(a) ? rxb(this, a) : q7(a) ? sxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var T7 = [10]; g.w(xxb, D7); xxb.prototype.B = function (a) { return o7(a) ? Axb(this, a) : p7(a) ? Bxb(this, a) : q7(a) ? Cxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var zxb = [10]; g.w(Exb, D7); Exb.prototype.B = function (a) { return p7(a) ? Gxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) }; g.w(Hxb, R7); g.k = Hxb.prototype; g.k.kD = function (a) { var b = R7.prototype.kD.call(this, a); b.mainVideoEntity = new xxb(a, this.X, this.j); b.mainPlaylistEntity = new mxb(a, this.X, this.j); b.mainDownloadsListEntity = new Exb(a, this.X); return b };
    g.k.refreshAllStaleEntities = function (a, b) {
        var c = this, d, e, f, h, l, m, n, p, q, r, t; return g.H(function (v) {
            switch (v.j) {
                case 1: d = []; if (!c.X.L("web_player_offline_playlist_auto_refresh")) { v.La(2); break } return g.z(v, Ixb(c, a, b), 3); case 3: d = v.B; case 2: return g.z(v, Q6.getInstance(), 4); case 4: return e = v.B, g.z(v, null == (f = e) ? void 0 : f.get("sdois"), 5); case 5: return h = v.B, g.z(v, null == (l = e) ? void 0 : l.get("lmqf"), 6); case 6: m = v.B; if (!h) { v.La(7); break } p = d; q = p.concat; return g.z(v, Jxb(c, h, null != (n = m) ? n : "SD", 0 === a), 8); case 8: d =
                    q.call(p, v.B); case 7: return r = d, t = r.concat, g.z(v, R7.prototype.refreshAllStaleEntities.call(c, a, b), 9); case 9: return d = t.call(r, v.B), v.return(d)
            }
        })
    };
    g.k.RS = function (a) { var b, c, d, e, f, h, l, m; return g.H(function (n) { if (1 == n.j) return g.z(n, e7(), 2); if (3 != n.j) return (b = n.B) ? g.z(n, c7(b, C7, "mainDownloadsListEntity"), 3) : n.return(!1); c = n.B; if (null == (d = c) ? 0 : null == (e = d.downloads) ? 0 : e.length) for (f = g.gP(a, "mainVideoEntity"), h = g.u(c.downloads), l = h.next(); !l.done; l = h.next())if (m = l.value, m.videoItem === f) return n.return(!0); return n.return(!1) }) };
    g.k.OM = function () {
        var a = this, b, c, d, e, f, h, l, m; return g.H(function (n) {
            if (1 == n.j) return g.z(n, e7(), 2); if (3 != n.j) return (b = n.B) ? g.z(n, d7(b, "downloadStatusEntity"), 3) : n.return([]); c = n.B; d = []; e = g.u(c); for (f = e.next(); !f.done; f = e.next())h = f.value, "DOWNLOAD_STATE_USER_DELETED" === h.downloadState && h.key && (l = g.fP(h.key).entityId, d.push(l)); return d.length ? (m = { offlineLoggingData: { offlineDeleteReason: "OFFLINE_DELETE_REASON_USER_INITIATED" } }, n.return(S7(a, d, "mainVideoEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                m))) : n.return([])
        })
    };
    g.k.qY = function () {
        var a, b, c, d, e, f, h, l, m, n, p, q, r, t, v, x, B, E, F, G, P, Q, R, ha, wa, ua, ma, sa, da, ba, La, y, Z, Ta, db, nb, Qa, Xa; return g.H(function (Za) {
            if (1 == Za.j) return g.z(Za, e7(), 2); if (3 != Za.j) { a = Za.B; if (!a) return Za.return(); b = g.gP("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"); return g.z(Za, a7(a, { mode: "readonly", Tb: !0 }, function (rb) { return g.PD.all([U6(rb, b, "mainDownloadsListEntity"), U6(rb, C7, "mainDownloadsListEntity"), V6(rb, "mainVideoEntity"), V6(rb, "mainPlaylistEntity")]) }), 3) } c = Za.B;
            d = g.u(c); e = d.next().value; f = d.next().value; h = d.next().value; l = d.next().value; m = e; n = f; p = h; q = l; r = new Set; if (null == (t = m) ? 0 : null == (v = t.downloads) ? 0 : v.length) for (x = g.u(m.downloads), B = x.next(); !B.done; B = x.next())E = B.value, F = void 0, (G = null != (F = E.videoItem) ? F : E.playlistItem) && r.add(G); if (null == (P = n) ? 0 : null == (Q = P.downloads) ? 0 : Q.length) for (R = g.u(n.downloads), ha = R.next(); !ha.done; ha = R.next())wa = ha.value, wa.videoItem && r.add(wa.videoItem); ua = new Set; ma = []; sa = g.u(q); for (da = sa.next(); !da.done; da = sa.next()) {
                ba = da.value;
                if (ba.videos) for (La = g.u(ba.videos), y = La.next(); !y.done; y = La.next())Z = y.value, (Ta = JSON.parse(g.fP(Z).entityId).videoId) && ua.add(Ta); ba.key && !r.has(ba.key) && ma.push(ba.key)
            } db = g.u(p); for (nb = db.next(); !nb.done; nb = db.next())Qa = nb.value, Qa.key && !r.has(Qa.key) && (Xa = g.fP(Qa.key).entityId, ua.has(Xa) || ma.push(Qa.key)); return ma.length ? g.z(Za, Fvb(a, ma), 0) : Za.La(0)
        })
    }; var Nxb = "downloadStatusEntity musicAlbumRelease musicDownloadsLibraryEntity musicPlaylist musicTrack musicTrackDownloadMetadataEntity offlineVideoPolicy offlineVideoStreams playbackData transfer videoDownloadContextEntity".split(" "); g.w(Txb, D7); Txb.prototype.B = function (a) { return o7(a) ? Vxb(this, a) : p7(a) ? Wxb(this, a) : q7(a) ? Xxb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var Y7 = [10]; g.w(Zxb, D7); Zxb.prototype.B = function (a) { return o7(a) ? ayb(this, a) : p7(a) ? byb(this, a) : q7(a) ? cyb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var Z7 = [10]; g.w(fyb, D7); fyb.prototype.B = function (a) { return o7(a) ? jyb(this, a) : p7(a) ? kyb(this, a) : q7(a) ? lyb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var iyb = [10]; g.w($7, R7); $7.prototype.kD = function (a) { var b = R7.prototype.kD.call(this, a); b.musicTrack = new fyb(a, this.j); b.musicPlaylist = new Zxb(a, this.j); b.musicAlbumRelease = new Txb(a, this.j); return b };
    $7.prototype.refreshAllStaleEntities = function (a, b) { var c = this, d, e, f; return g.H(function (h) { if (1 == h.j) return e = d = [], f = e.concat, g.z(h, R7.prototype.refreshAllStaleEntities.call(c, a, b), 2); d = f.call(e, h.B); return h.return(d) }) }; g.w(nyb, g.YV); g.k = nyb.prototype; g.k.create = function () {
        var a = this; g.M(this, this.events); g.FS(this.X) ? this.j = new Hxb(this.X, this.player) : g.BH(this.X) && (this.j = new $7(this.X, this.player)); this.events.T(this.player, "onPlaybackStartExternal", function () { a.iI() });
        this.events.T(this.player, "videodatachange", function () { a.iI() })
    };
    g.k.rl = function () { return !1 };
    g.k.jba = function (a, b, c, d) { var e = this; return g.H(function (f) { return e.j ? f.return(S7(e.j, a, b, c, d)) : f.return(Promise.reject()) }) };
    g.k.SQ = function (a) { return this.j.SQ(a) };
    g.k.refreshAllStaleEntities = function (a) { return this.j.refreshAllStaleEntities(a) };
    g.k.yQ = function (a) { this.j.yQ(a) };
    g.k.pF = function (a) { return this.j.pF(a) };
    g.k.iI = function () { var a = this, b; return g.H(function (c) { b = a.player.getVideoData(); return g.kU(b) ? oyb(b) && a.B !== b.clientPlaybackNonce ? g.z(c, pyb(a, b), 0) : c.La(0) : c.return() }) };
    g.k.isOrchestrationLeader = function () { return this.j.isOrchestrationLeader() };
    g.k.updateDownloadState = function (a, b) { var c, d, e, f; return g.H(function (h) { if (1 == h.j) return g.z(h, e7(), 2); c = h.B; if (!c) return i7("PES is undefined"), h.return(); d = g.fP(a); e = d.entityType; f = d.entityId; return g.z(h, r7(f, e, c, b, !0), 0) }) }; g.XV("offline", nyb);
})(_yt_player);
