"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  TrendingUp,
  Zap,
  Shield,
  Brain,
  DollarSign,
} from "lucide-react";
import AuthorProfile from "@/components/AuthorProfile";
import WhyTrustUsDropdown from "@/components/WhyTrustUsDropdown";

interface DynamicParams {
  [key: string]: string;
}

export default function CryptoPresalesClientDE() {
  const [dynamicParams, setDynamicParams] = useState<DynamicParams>({});

  useEffect(() => {
    // Extract ALL URL parameters from current URL
    const urlParams = new URLSearchParams(window.location.search);
    
    const extractedParams: DynamicParams = {};
    
    // Get all URL parameters automatically
    urlParams.forEach((value, key) => {
      extractedParams[key] = value;
    });

    setDynamicParams(extractedParams);
  }, []);

  // Helper function to build DeepSnitch URLs with all dynamic parameters
  const buildDeepSnitchURL = () => {
    const params = new URLSearchParams({
      utm_source: "coinpresales",
      utm_medium: "article",
      utm_campaign: "5-best-crypto-presales-de",
    });

    // Add ALL dynamic parameters from the URL (this will include utm_content, utm_term, gclid, gbraid, wbraid, and any future parameters)
    Object.entries(dynamicParams).forEach(([key, value]) => {
      if (value && key !== 'utm_source' && key !== 'utm_medium' && key !== 'utm_campaign') {
        params.set(key, value);
      }
    });

    return `https://deepsnitch.ai/?${params.toString()}`;
  };

  return (
    <article
      className="min-h-screen"
      style={{ backgroundColor: "rgba(255, 245, 238, 0.7)" }}
    >
      {/* Header Section */}
      <section className="py-8 md:py-12">
        <div className="container-max-w">
          <Link
            href="/articles"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to All Articles
          </Link>

          {/* Main Title */}
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Die 5 besten Krypto-Presales, die du jetzt kaufen kannst –
              <span className="text-orange-500">
                {" "}
                einer ist noch in einer sehr frühen Phase
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              In den Jahren 2023 und 2024 kamen Coins wie <strong>$PEPE</strong>
              , <strong>$WIF</strong> und <strong>$VIRTUAL</strong> nahezu ohne
              Aufsehen auf den Markt und machten frühe Käufer teilweise über
              Nacht zu Millionären. 2025 erreicht Bitcoin neue Allzeithochs, und
              die Gier nach Gewinnen ist größer denn je. Wenn du auf das
              100-Fache abzielst, brauchst du mehr als nur Hype. Du brauchst
              einen echten Geheimtipp, den der Markt noch nicht eingepreist hat.
            </p>

            <p className="text-lg font-semibold text-orange-600 mt-4">
              <strong>
                Einer der besten Krypto-Presales läuft noch – aber nicht mehr
                lange.
              </strong>
            </p>

            {/* Author Profile Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-8">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200">
                <Image
                  className="w-16 h-16 rounded-full text-gray-500"
                  src={"/images/articles/antoine-marin.jpg"}
                  alt={"Avatar"}
                  width={20}
                  height={20}
                />
                <span className="text-base font-medium text-gray-600">Von</span>
                <AuthorProfile author="Antoine Marin" size="small" />
              </div>
              <div className="  px-6 pt-7   ">
                <WhyTrustUsDropdown />
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative h-80 md:h-96 lg:h-[28rem] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/articles/mainimage.jpg"
              alt="Analyse: Die 5 besten Krypto-Presales - DSNT, PEPE, WIF, FET, VIRTUAL"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Analyse: Die 5 besten Krypto-Presales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-8">
        <div className="container-max-w max-w-4xl">
          {/* Coin #1 - DSNT (Featured/Highlighted) */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-3xl p-8 mb-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                🔥 Top-Empfehlung
              </div>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                🟢 Presale läuft
              </div>
              <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Geprüft
              </div>
              <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Keine Steuern
              </div>
              <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Keine Team-Allokation
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/images/articles/dslogo.png"
                  alt="DeepSnitch AI Logo"
                  width={32}
                  height={32}
                  className="h-8"
                />
                <span>1. DeepSnitch ($DSNT)</span>
              </div>
              <div className="text-lg font-normal text-gray-600">
                Der beste Krypto-Presale 2025
              </div>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Krypto setzt voll auf KI. Dies ist deine Chance, der Masse einen
              Schritt voraus zu sein.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DeepSnitch gibt neuen Tradern die Tools, die sonst nur
              Institutionen haben: fünf KI-Agenten, die Wallets überwachen,
              verdächtige Deploys erkennen und frühe Alpha-Infos aufspüren. Rund
              um die Uhr, damit du es nicht tun musst.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              KI-Coins legen bereits kräftig zu, und mit einem prognostizierten
              KI-Marktvolumen von über 800 Milliarden US-Dollar bis 2030 zählt
              DeepSnitch aktuell zu den heißesten Krypto-Presales.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Während die besten Meme-Coins vor allem vom Hype leben, bietet
              DeepSnitch AI echten Mehrwert, reale Nutzung und die Tools, mit
              denen du den nächsten 100x-Gewinner entdeckst – bevor es alle
              anderen tun.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Warum DeepSnitch perfekt für 2025 ist:
            </h3>

            <div className="grid md:grid-cols-1 gap-4 mb-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>
                    Passt genau zum Trend rund um AgentOps und On-Chain-Intel,
                    der bereits Projekte wie $FET, $NUM und $ARKM groß gemacht
                    hat.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span>
                    Früher Zugang zu einem Projekt mit dem Potenzial, ähnliche
                    Erfolge wie $ARKM zu erzielen – oder diese sogar zu
                    übertreffen –, während der KI-Markt von derzeit 244 Mrd.
                    US-Dollar bis 2030 auf über 800 Mrd. US-Dollar wächst.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <span>
                    Faires Launch-Setup: auditierter Smart Contract, keine
                    Steuern, keine Team-Allokation.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Einstiegspreis von nur 0,01510 US-Dollar.</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>
                    Frühe Käufer können sich noch vor Marktstart auf ein Plus
                    von 260 % positionieren.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DeepSnitch scannt Wale, erkennt Token-Risiken und zieht
              Alpha-Infos direkt aus Telegram, noch bevor sie zum Trend werden.
              Die Ära der manuellen Recherche geht zu Ende.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-semibold">
              DeepSnitch ist der nächste Schritt.
            </p>

            {/* Main CTA for DSNT */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white text-center shadow-lg">
              <h4 className="text-xl font-bold mb-3">
                🔥 Mach mit beim $DSNT-Presale
              </h4>
              <p className="mb-4 text-orange-100">
                Die einzige KI-gestützte Krypto-Intelligence-Plattform, die sich
                noch im Presale befindet. Sichere dir deine Position, bevor die
                nächste Preisstufe erreicht wird.
              </p>
              <Link
                href={buildDeepSnitchURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Jetzt am $DSNT-Presale teilnehmen{" "}
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Coin #2 - PEPE */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                2. Pepe ($PEPE) – Meme-Potenzial + Timing = 1000x
              </h2>
              <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                Presale beendet
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              $PEPE startete im April 2023 und stieg innerhalb von nur 17 Tagen
              um fast 7.000 %. Am 5. Mai lag die Marktkapitalisierung bereits
              bei 1,8 Milliarden US-Dollar. Beim Launch wurde der Coin von
              vielen ignoriert oder sogar abgeschrieben. Heute zählt er zu den
              explosivsten Meme-Coins aller Zeiten – mit anhaltend hohem
              Handelsvolumen und starker Präsenz auf den größten Exchanges.
            </p>
          </div>

          {/* Coin #3 - WIF */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                3. Dogwifhat ($WIF) – Der virale König von Solana
              </h2>
              <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                Presale beendet
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              $WIF startete auf Solana ohne große Erwartungen und stieg
              innerhalb von nur drei Monaten um über 310.000 % – von 0,0015 $
              auf mehr als 4,80 $. Damit übertraf er jede große Coin-Performance
              am Markt. Was als Meme von einem Hund mit Hut begann, entwickelte
              sich zu einer der aggressivsten Kursbewegungen dieses Zyklus und
              wird heute mit hohem Volumen auf führenden Börsen gehandelt.
            </p>
          </div>

          {/* Mid-Article CTA */}
          <div className=" p-6 rounded-2xl text-white text-center my-8 ">
            <div className="text-2xl mb-3">
              <Link
                href={buildDeepSnitchURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity duration-300"
              >
                <Image
                  src="/images/articles/banner.jpg"
                  alt="Der meistdiskutierte KI-Coin 2025 - Noch früh, noch günstig - Jetzt $DSNT kaufen"
                  width={1200}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </Link>
            </div>
            <p className="mb-4 text-black">
              DeepSnitch ($DSNT) ist das einzige Projekt auf dieser Liste, das
              sich noch in der Presale-Phase befindet – und dabei echte
              KI-Features bietet.
            </p>
            <Link
              href={buildDeepSnitchURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300"
            >
              <Image
                src="/images/articles/dslogo.png"
                alt="DeepSnitch AI Logo"
                width={34}
                height={30}
                className="h-8 pr-1"
              />{" "}
              Schau dir DeepSnitch AI ($DSNT) an{" "}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Coin #4 - FET */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                4. Artificial Superintelligence Alliance ($FET) – KI × Krypto
                bricht durch
              </h2>
              <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                Presale beendet
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              $FET hat gezeigt, dass KI-Coins genauso stark pumpen können.
              Allein im März 2024 stieg der Kurs um über 300 %. Das bestätigt:
              KI ist in der nächsten Phase von Krypto nicht nur ein Trendthema,
              sondern ein zentraler Bestandteil der Infrastruktur. $FET ist der
              Beweis, dass KI-Coins mit der gleichen Wucht wie Meme-Coins
              steigen können – oft sogar mit mehr Ausdauer.
            </p>
          </div>

          {/* Coin #5 - VIRTUAL */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900">
                5. Virtuals Protocol ($VIRTUAL) – Der Beginn der Ära der
                KI-Agenten
              </h2>
              <span className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                Presale beendet
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Virtuals Protocol hat es allen ermöglicht, eigene KI-Agenten zu
              erstellen. Der KI-Coin legte im Oktober 2024 um über 550 % zu und
              erreichte nur wenige Monate später im Februar ein Allzeithoch von
              5,07 $. Ein Anstieg von über 67.000 % gegenüber dem bisherigen
              Tief zeigt das enorme Interesse an agentenbasierter Technologie
              und bestätigt: Diese Kategorie hat enormes Ausbruchspotenzial.
            </p>
          </div>

          {/* Final Section */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              $PEPE, $WIF oder $VIRTUALS verpasst?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
              DeepSnitch ist der nächste Meme-Coin–KI-Hybrid, den du im Blick
              behalten solltest.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DSNT ist einer der derzeit spannendsten Krypto-Presales.
              Unterstützt von einem echten Produkt: fünf KI-Agenten, die Wale
              tracken, Alpha-Infos aus Telegram ziehen und Token-Risiken
              markieren, noch bevor der Pump den Markt erreicht.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Frühe Investoren können sich vor dem Launch bis zu +260 % sichern.
              Jede Preisstufe wird durch Nachfrage ausgelöst. Der nächste Sprung
              kann jederzeit kommen.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold text-center">
              Alles zeigt in eine Richtung: DeepSnitch AI ist auf dem Weg zum
              Mond.
            </p>
          </div>

          {/* Final CTA - WITH DEEPSNITCH BRANDING */}
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-8 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background Pattern/Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-12 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 left-12 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
            </div>

            {/* DeepSnitch Branding */}
            <div className="relative z-10 mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Image
                  src="/images/articles/deepsnitchlogo.svg"
                  alt="DeepSnitch AI Logo"
                  width={200}
                  height={48}
                  className="h-12 bg-white/20 px-4 py-2 rounded-lg"
                />
              </div>
              <div className="text-center">
                <div className="text-sm text-orange-200">
                  KI-gestützte Krypto-Intelligence-Plattform
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Verpass nicht die nächste 100x-Chance
            </h3>
            <p className="text-xl mb-6 text-orange-100 relative z-10">
              DeepSnitch ($DSNT) befindet sich noch im Presale – mit echtem
              KI-Utility und dem Potenzial für starke Gewinne, noch bevor der
              Handel auf großen Börsen startet.
            </p>
            <p className="text-lg mb-8 text-orange-200 relative z-10">
              Das ist deine Chance auf Early-Access zur KI × Krypto-Revolution.
            </p>

            {/* Enhanced CTA Button with Icons */}
            <div className="relative z-10">
              <Link
                href={buildDeepSnitchURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-orange-500 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <Image
                  src="/images/articles/dslogo.png"
                  alt="DeepSnitch"
                  width={24}
                  height={24}
                  className="mr-3 h-5"
                />
                Jetzt am $DSNT-Presale teilnehmen{" "}
                <ExternalLink className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Additional branding elements */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-orange-200">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Geprüft</span>
                </div>
                <div className="flex items-center gap-1">
                  <Brain className="w-4 h-4" />
                  <span>KI-gestützt</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  <span>$0.01510</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="rounded-xl p-8 text-center shadow-md glass">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Verpasse nie wieder den nächsten großen Presale!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Erhalte tägliche Early-Alerts zu den heißesten Krypto-Presales,
                exklusive Marktanalysen und Trading-Insights direkt in dein
                Postfach.
              </p>
              <Link href="/#newsletter" className="btn-primary text-lg">
                <Zap className="w-5 h-5 mr-2" /> Newsletter abonnieren
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
