"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./index.scss";
import animation1 from "./animation1.json";
import animation2 from "./animation2.json";
import animation3 from "./animation3.json";
import animation4 from "./animation4.json";

import LOGO from "./img/logo-memo.svg";
import img01 from "./img/img01.jpg";
import img02 from "./img/img02.avif";
import arrowRight from "./img/MaterialSymbolsLightArrowForward.svg";
import arrowLeft from "./img/MaterialSymbolsLightArrowBackRounded.svg";
import brand01 from "./img/brands/brand01.png";
import brand02 from "./img/brands/brand02.png";
import brand03 from "./img/brands/brand03.png";
import brand04 from "./img/brands/brand04.png";
import brand05 from "./img/brands/brand05.png";
import brand06 from "./img/brands/brand06.png";
import brand07 from "./img/brands/brand07.png";
import brand08 from "./img/brands/brand08.avif";
import brand09 from "./img/brands/brand09.avif";
import brand10 from "./img/brands/brand10.avif";

const HeroArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="stroke-1"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.97 4.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L18.94 13H4.75a.75.75 0 0 1 0-1.5h14.19l-6.97-6.97a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const Home = () => {
  const [homePageContentLoaded, setHomePageContentLoaded] = useState(false);
  const [homePageContent, setHomePageContent] = useState("");
  const [caseIndex, setCaseIndex] = useState(0);
  const [activeAdv, setActiveAdv] = useState(0);
  const lottieBoxRef = useRef(null);
  const lottieInstanceRef = useRef(null);

  const navItems = [
    { label: "首页", href: "#", active: true },
    { label: "为什么选择开亚", href: "#advantages" },
    { label: "服务及解决方案", href: "#services" },
    { label: "合作伙伴", href: "#partners" },
    { label: "客户案例", href: "#cases" },
    { label: "关于我们", href: "#about" },
    { label: "联系我们", href: "#contact" },
  ];

  const metrics = [
    { icon: "", value: "2000+", label: "跨境电商卖家长期合作" },
    { icon: "", value: "5万+", label: "日均订单处理能力" },
    { icon: "", value: "4 大洲 8 个海外仓节点" },
  ];

  const advantages = [
    {
      title: "极速履约",
      desc: "美国本土发货，2–5 日送达终端客户",
    },
    {
      title: "一件代发",
      desc: "多平台订单自动同步，对接 Amazon / AliExpress / eBay / Wish",
    },
    {
      title: "多元渠道",
      desc: "美森海卡、航空直飞、中美专线，灵活平衡时效与成本",
    },
    {
      title: "深度合作",
      desc: "FedEx / UPS / Hermes / Australia Post 官方合作伙伴",
    },
    {
      title: "五星级服务",
      desc: "FBA 入仓、退货处理、库存管理、虚拟仓等增值服务",
    },
  ];

  const services = [
    {
      id: "warehouse",
      tag: "美国海外仓服务",
      title: "海外仓",
      desc: "深度布局美国东西海岸核心枢纽仓网，实现本地化存储、极速履约与柔性售后，显著降低跨境物流成本与交付不确定性，让您的品牌在北美市场更具竞争力。",
      points: [
        { title: "一件代发", desc: "无缝对接主流电商平台，订单自动处理" },
        { title: "库存管理", desc: "实时库存同步与多平台共享" },
        { title: "本地退换", desc: "支持美国境内退货质检、换货重发" },
        { title: "虚拟海外仓", desc: "无实物占仓即可展示本地发货标识" },
      ],
      img: img01,
    },
    {
      id: "logistics",
      tag: "跨境物流服务",
      title: "跨境物流",
      desc: "从国内工厂/仓库到海外仓/终端客户，多种渠道灵活组合。",
      points: [
        { title: "海派", desc: "海运加快递派送，性价比之选" },
        { title: "海卡", desc: "海运加卡车派送，大货重货优选" },
        { title: "空派", desc: "空运加末端派送，平衡时效与成本" },
        { title: "快递直发", desc: "国际主流快递直发，极速达全球" },
      ],
      img: img02,
    },
  ];

  const partnerRows = [
    ["Amazon", "AliExpress", "eBay", "Wish"],
    ["FedEx", "UPS", "Hermes", "Australia Post"],
  ];

  const caseStudies = [
    {
      tag: "家居用品",
      title: "美国本地仓储 + 专线组合，降低大件产品物流成本",
      bullets: [
        "发货模式：海运集拼 + 本地分拨",
        "结果：整体成本下降 18%",
        "结果：破损率下降 12%",
        "旺季库存周转稳定，客户好评率提升",
      ],
    },
    {
      tag: "美妆个护",
      title: "敏感品类通过航空直飞+退货处理，保障体验与合规",
      bullets: [
        "发货模式：航空直飞 + 海外仓一件代发",
        "结果：时效保持在 5–7 个工作日",
        "结果：退货处理及时，差评率下降 10%",
        "持续补货与促销配合，销量稳步增长",
      ],
    },
    {
      tag: "3C电子",
      title: "某深圳3C卖家通过开亚美国仓，实现时效与体验双提升",
      bullets: [
        "发货模式：由国内直发转为美国海外仓一件代发",
        "结果：配送时效提升 40%+",
        "结果：退货率下降 15%",
        "旺季订单爆发期，无大规模延误或丢件",
      ],
    },
  ];

  const advantageTabs = [
    {
      title: "极速履约",
      desc: "美国本土仓极速发货，直抵终端消费者，2-5个工作日完成高效履约，以可靠时效托底店铺评分与复购表现。",
      animation: animation1,
    },
    {
      title: "一件代发",
      desc: "多平台订单自动同步，无缝对接 Amazon、AliExpress、eBay、Wish 等主流平台，减少人工操作，助您零库存压力轻量化运营，聚焦核心销售与增长。",
      animation: animation2,
    },
    {
      title: "多元渠道",
      desc: "美森海卡、航空直飞、中美专线等多种运输方案，智能匹配时效与成本，为您量身定制最优物流路径。",
      animation: animation3,
    },
    {
      title: "全场景服务",
      desc: "超越基础仓储，提供FBA中转、虚拟海外仓配置、精细化库存管理与专业退货处理等一站式增值服务，覆盖跨境全链路需求。",
      animation: animation4,
    },
  ];

  const heroBrandLogos = [
    brand01,
    brand02,
    brand03,
    brand04,
    brand01,
    brand05,
    brand06,
    brand07,
    brand01,
    brand08,
    brand09,
    brand10,
  ];

  const loadLottie = () =>
    new Promise((resolve, reject) => {
      if (window.lottie) {
        resolve(window.lottie);
        return;
      }
      const existing = document.getElementById("lottie-web-lib");
      if (existing) {
        existing.onload = () => resolve(window.lottie);
        existing.onerror = reject;
        return;
      }
      const script = document.createElement("script");
      script.id = "lottie-web-lib";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
      script.async = true;
      script.onload = () => resolve(window.lottie);
      script.onerror = reject;
      document.body.appendChild(script);
    });

  useEffect(() => {
    let cancelled = false;
    if (!lottieBoxRef.current) {
      return undefined;
    }
    loadLottie()
      .then((lottie) => {
        if (cancelled || !lottieBoxRef.current) return;
        if (lottieInstanceRef.current) {
          lottieInstanceRef.current.destroy();
        }
        lottieInstanceRef.current = lottie.loadAnimation({
          container: lottieBoxRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: advantageTabs[activeAdv].animation,
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (lottieInstanceRef.current) {
        lottieInstanceRef.current.destroy();
        lottieInstanceRef.current = null;
      }
    };
  }, [activeAdv]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleCaseChange = (direction) => {
    setCaseIndex((prev) => {
      const next = (prev + direction + caseStudies.length) % caseStudies.length;
      return next;
    });
  };

  const activeCase = caseStudies[caseIndex];

  const handleLoginClick = () => {
    window.open(
      "https://kaya-admin-beta.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {homePageContentLoaded && homePageContent !== "" ? (
        homePageContent.startsWith("https://") ? (
          <iframe
            src={homePageContent}
            style={{ width: "100%", height: "100vh", border: "none" }}
            title="homepage-content"
          />
        ) : (
          <div
            style={{ fontSize: "larger" }}
            dangerouslySetInnerHTML={{ __html: homePageContent }}
          ></div>
        )
      ) : (
        <div className="air-home">
          <section className="hero-section">
            <header className="home-header">
              <div className="logo-area"></div>
              <nav className="home-nav">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`nav-item ${item.active ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="header-actions">
                <button className="outline-btn" onClick={handleLoginClick}>
                  登录
                </button>
                <button className="outline-btn">7x24 在线客服</button>
              </div>
            </header>
            <div className="hero-content">
              <div className="hero-title">
                <span className="pill pill-blue">
                  海外仓 + 跨境物流 一站式服务
                </span>
                <h1>一站式跨境供应链服务商</h1>
                <div className="hero-subtitle">
                  覆盖欧美日澳，专注美国海外仓 &amp;
                  中美专线，助力跨境电商企业销往全球
                </div>
              </div>
              <div className="hero-actions">
                <button className="primary-btn" onClick={handleLoginClick}>一键发展您的业务</button>
                <button className="primary-btn arrow-btn" onClick={handleLoginClick}>
                  <HeroArrowRight
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </section>
          <section className="hero-brand-wrap" id="partners">
            <div className="hero-brand">
              <div className="hero-brand-title">
                K联盟 · 开亚KAYA与全球电商平台及物流巨头深度合作，护航出海
              </div>
              <div className="hero-brand-content">
                {heroBrandLogos.map((logo, idx) => (
                  <div className="brand-card" key={`${logo}-${idx}`}>
                    <Image
                      src={logo}
                      alt="合作品牌 logo"
                      width={120}
                      height={60}
                      className="brand-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="advantages-section" id="advantages">
            <div className="advantages-body">
              <div className="advantages-left">
                <div className="section-head">
                  <h2 className="section-head-title">为什么选择开亚国际？</h2>
                  {/* <p>专业、高效、可信赖</p> */}
                </div>
                <div
                  role="tablist"
                  aria-label="优势切换"
                  className="adv-tablist"
                >
                  {advantageTabs.map((item, idx) => (
                    <div
                      key={item.title}
                      aria-selected={activeAdv === idx}
                      className={`adv-tab ${activeAdv === idx ? "active" : ""}`}
                      onClick={() => setActiveAdv(idx)}
                    >
                      <div className="adv-tab-title">{item.title}</div>
                      {activeAdv === idx && (
                        <div className="adv-tab-desc">{item.desc}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="advantages-right">
                <div className="adv-visual" aria-live="polite">
                  <div className="adv-lottie" ref={lottieBoxRef}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section" id="services">
            <div className="services-section-main">
              <div className="section-head">
                <div className="head-sub"></div>
                <div className="head-title">两大核心业务</div>
                <div className="head-sub">
                  美国海外仓 + 跨境物流专线，全链路打通从国内到海外终端的每一步
                </div>
              </div>
              <div className="service-grid">
                {services.map((service) => (
                  <div
                    className="service-card"
                    key={service.id}
                    id={service.id}
                  >
                    <Image
                      src={service.img}
                      alt={`${service.title} 背景`}
                      fill
                      sizes="(min-width: 1024px) 1440px, 100vw"
                      className="service-bg"
                      priority={service.id === "warehouse"}
                    />
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p className="service-desc">{service.desc}</p>
                      <div className="service-points">
                        {service.points.map((point) => (
                          <div className="service-point" key={point.title}>
                            <div className="title">{point.title}</div>
                            <div className="desc">{point.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="card-scrim"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cases-section" id="cases">
            <div className="cases-body">
              <div className="section-head">
                <div className="cases-title">客户案例与典型场景</div>
                <div className="cases-desc">用数据与结果证明服务价值</div>
              </div>
              <div className="case-slider-content">
                <div className="case-slider">
                  <div className="case-card">
                    <div className="tag">{activeCase.tag}</div>
                    <h3>{activeCase.title}</h3>
                    <ul>
                      {activeCase.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="slider-btn">
                  <div
                    className="circle-btn"
                    aria-label="上一条案例"
                    onClick={() => handleCaseChange(-1)}
                  >
                    <Image
                      src={arrowLeft}
                      alt="上一条案例"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div
                    className="circle-btn"
                    aria-label="下一条案例"
                    onClick={() => handleCaseChange(1)}
                  >
                    <Image
                      src={arrowRight}
                      alt="下一条案例"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="home-footer" id="contact">
            <div className="footer-body">
              <div className="footer-upper">
                <div className="footer-logo">
                  <Image src={LOGO} alt="KAYA LOGO" width={200} height={80} />
                  <div className="footer-logo-name">
                    浙江开亚国际供应链有限公司
                  </div>
                  {/* <div className='footer-logo-desc'> 专注美国海外仓、中美跨境专线，服务跨境卖家多年。<br />提供仓储、履约、物流一站式解决方案。</div> */}
                </div>
                <div>
                  <div className="footer-title">快速链接</div>
                  <ul className="footer-logo-text">
                    <li>首页</li>
                    <li>为什么选择开亚</li>
                    <li>服务及解决方案</li>
                    <li>客户案例</li>
                    <li>合作伙伴</li>
                    <li>关于我们</li>
                    <li>联系我们</li>
                  </ul>
                </div>
                <div>
                  <div className="footer-title">联系我们</div>
                  <ul className="footer-logo-text">
                    <li>地址：浙江省义乌市柳青路1568号2号楼5楼</li>
                    <li>电话：0579-85151260</li>
                    <li>传真：0579-85151200/85151231</li>
                    <li>邮箱：service@kaiya-logistics.com</li>
                  </ul>
                </div>
                <div className="footer-qrcode">
                  <div className="footer-title">关注我们</div>
                  <div className="qr-placeholder">二维码</div>
                  <p className="footer-logo-text">扫码关注开亚KAYA</p>
                </div>
              </div>
              <div className="footer-lower">
                <span>© 2025 浙江开亚国际供应链有限公司 版权所有</span>
                <span>浙ICP备16036945号-3</span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;
