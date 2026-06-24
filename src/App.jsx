import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "3", label: "核心项目案例" },
  { value: "10+", label: "覆盖技术模块" },
  { value: "100%", label: "独立开发参与度" },
];

const profilePills = ["Frontend", "Vue3", "UniApp", "Full-Stack Learning"];

const projects = [
  {
    title: "小苹果精选电商小程序",
    period: "2024.10 - 2024.11",
    role: "独立开发",
    stack: ["UniApp", "Vue3", "Pinia", "SCSS", "微信开发者工具"],
    summary:
      "面向移动端用户的综合性电商小程序，覆盖商品浏览、购物车管理、订单结算与个人中心等核心使用链路。",
    highlights: [
      "搭建 UniApp + Vue3 项目结构，封装 NavBar、商品卡片等公共组件，提升页面复用效率。",
      "封装 uni.request 请求层，实现 Token 自动注入、Loading 状态管理和全局错误拦截。",
      "使用 Pinia 管理登录态与购物车数据，完成跨页面数据同步与状态维护。",
      "实现商品详情、加入购物车、购物车结算等关键电商交互流程。",
    ],
    takeaway:
      "这个项目让我完整经历了移动端电商业务中从页面搭建、状态管理到交互细节打磨的全过程。",
    accent:
      "linear-gradient(135deg, rgba(92, 119, 255, 0.64), rgba(21, 29, 47, 0.18) 70%)",
    eyebrow: "Mobile Commerce Mini Program",
    yearLabel: "2024",
    featureTags: ["UniApp", "状态管理", "电商流程"],
    gallery: [
      { src: "/project-images/xiaopingguo/home.png", alt: "小苹果精选首页", label: "首页" },
      { src: "/project-images/xiaopingguo/detail.png", alt: "小苹果精选商品详情", label: "商品详情" },
      { src: "/project-images/xiaopingguo/cart.png", alt: "小苹果精选购物车", label: "购物车" },
    ],
  },
  {
    title: "易校校园二手交易平台",
    period: "2025.09 - 2025.12",
    role: "独立开发",
    stack: ["Vue3", "Vite", "Vue Router", "Pinia", "Axios", "Element Plus"],
    summary:
      "面向校园用户的二手交易平台，支持商品浏览、搜索分类、商品发布、个人中心与后台审核管理等完整交易流程。",
    highlights: [
      "使用 Vue3 + Vite 完成项目初始化与模块拆分，搭建首页、分类、商品发布和个人中心等核心页面。",
      "通过 Vue Router 实现页面路由管理，并使用路由守卫完成登录拦截与页面访问控制。",
      "封装 Axios 请求方法，统一处理接口调用、错误提示与基础请求逻辑。",
      "扩展后台审核页和后台商品管理页，让前台发布与管理端审核形成闭环。",
    ],
    takeaway:
      "这个项目强化了我对前端工程结构、页面组织方式和前后台联动流程实现的理解。",
    accent:
      "linear-gradient(135deg, rgba(72, 208, 184, 0.54), rgba(18, 31, 33, 0.16) 70%)",
    eyebrow: "Campus Marketplace Platform",
    yearLabel: "2025",
    featureTags: ["前后台联动", "审核管理", "Vue3 工程化"],
    gallery: [
      { src: "/project-images/yixiao/home.png", alt: "易校校园二手交易平台首页", label: "首页" },
      { src: "/project-images/yixiao/profile.png", alt: "易校校园二手交易平台个人中心", label: "个人中心" },
      { src: "/project-images/yixiao/admin.png", alt: "易校校园二手交易平台后台商品页", label: "后台商品" },
      { src: "/project-images/yixiao/review.png", alt: "易校校园二手交易平台审核管理", label: "审核管理" },
    ],
  },
  {
    title: "食尚鲜送外卖点餐平台系统",
    period: "2026",
    role: "全栈开发 / 独立完成多端实现",
    stack: [
      "Vue3",
      "TypeScript",
      "Vite",
      "Vue Router",
      "Pinia",
      "Vant",
      "Element Plus",
      "Spring Boot",
      "MyBatis-Plus",
      "MySQL",
      "Redis",
      "JWT",
    ],
    summary:
      "一个包含用户端、管理端和后端服务的外卖点餐平台系统，覆盖店铺浏览、商品下单、购物车结算、订单流转、后台管理和接口服务等完整业务链路。",
    highlights: [
      "用户端基于 Vue3 + TypeScript + Vite + Vant 开发，实现首页搜索、分类筛选、店铺详情、商品加购、购物车、结算、订单、地址和评价等移动端核心流程。",
      "管理端基于 Vue3 + Element Plus 构建后台界面，完成数据总览、店铺管理、订单管理和运营审核等功能。",
      "后端基于 Spring Boot + MyBatis-Plus + MySQL + Redis 搭建接口服务，包含用户、店铺、商品、购物车、订单、收藏、评价、优惠券和统计等模块。",
      "通过 JWT 鉴权、拦截器、统一异常处理和请求封装串联多端业务流程，完成从前台下单到后台管理的完整系统闭环。",
    ],
    takeaway:
      "这个项目不只是页面实现，而是一次更完整的系统开发实践，让我同时积累了移动端交互、后台管理界面以及后端服务设计与接口联调经验。",
    accent:
      "linear-gradient(135deg, rgba(255, 170, 84, 0.52), rgba(58, 33, 16, 0.16) 70%)",
    eyebrow: "Full-Stack Delivery Platform",
    yearLabel: "2026",
    featureTags: ["用户端 + 管理端", "订单流转", "后端服务"],
    gallery: [
      { src: "/project-images/shishangxiansong/home.png", alt: "食尚鲜送用户端首页", label: "用户端首页" },
      { src: "/project-images/shishangxiansong/shop.png", alt: "食尚鲜送店铺详情页", label: "店铺详情" },
      { src: "/project-images/shishangxiansong/dashboard.png", alt: "食尚鲜送后台数据总览", label: "数据总览" },
    ],
  },
];

const strengths = [
  {
    title: "前端开发基础扎实",
    text: "熟悉 HTML5、CSS3、JavaScript ES6，能够完成页面结构搭建、交互实现和响应式布局开发。",
  },
  {
    title: "Vue 生态实践",
    text: "掌握 Vue3、Vue Router、Pinia 等常用技术方案，能独立完成中小型项目的模块拆分与功能实现。",
  },
  {
    title: "工程化意识",
    text: "熟悉 Vite、Webpack 和 Git，理解项目构建、版本管理与多人协作中的基本工作方式。",
  },
  {
    title: "AI 辅助开发",
    text: "能够结合 Codex、Claude Code 等工具辅助页面开发和代码整理，提升实现效率与验证速度。",
  },
];

function BrandMark() {
  return (
    <a className="brand-mark" href="#home" aria-label="邓新发作品集首页">
      <span className="brand-symbol" aria-hidden="true">
        <span className="brand-symbol__edge brand-symbol__edge-left" />
        <span className="brand-symbol__core" />
        <span className="brand-symbol__edge brand-symbol__edge-right" />
      </span>
      <span className="brand-copy">
        <strong>DXF</strong>
        <small>Code Portfolio</small>
      </span>
    </a>
  );
}

export default function App() {
  const [openProject, setOpenProject] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <BrandMark />
          <nav className="nav-links" aria-label="primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="mailto:15237687204@163.com">
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-video-layer">
            <video autoPlay muted loop playsInline poster="/media/hero-background.mp4">
              <source src="/media/hero-background.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay" />
          <div className="hero-gridlines" />
          <div className="container hero-content">
            <div className="hero-kicker">Software Engineer / Frontend Developer</div>
            <h1>
              用稳定的代码结构，
              <br />
              构建清晰、可靠、可持续演进的产品体验。
            </h1>
            <p className="hero-copy">
              我目前的方向是软件开发工程师，重点关注前端开发、工程化实践与实际业务落地，希望把学习能力和项目执行力转化成真正可交付的产品价值。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                查看项目经历
              </a>
              <a className="secondary-button" href="#about">
                了解我的背景
              </a>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-card">
                <span>Current Focus</span>
                <strong>Frontend Engineering</strong>
              </div>
              <div className="hero-meta-card">
                <span>Base</span>
                <strong>Nanjing, China</strong>
              </div>
              <div className="hero-meta-card">
                <span>Status</span>
                <strong>Open To Opportunities</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container section-grid">
            <div className="portrait-panel">
              <div className="portrait-frame">
                <div className="portrait-glow" />
                <div className="portrait-card">
                  <span className="portrait-card-label">Profile Snapshot</span>
                  <strong>Software Engineer Track</strong>
                  <p>聚焦前端开发、项目落地与持续成长，正在把校园项目经验打磨成更完整的工程能力。</p>
                </div>
                <div className="portrait-text">
                  <span>Nanjing</span>
                  <strong>邓新发</strong>
                  <p>软件开发工程师方向，持续积累前端开发、项目实现和工程协作能力。</p>
                  <div className="portrait-meta">
                    <div className="portrait-meta-item">
                      <span>Role</span>
                      <strong>Frontend / Software Engineer</strong>
                    </div>
                    <div className="portrait-meta-item">
                      <span>Status</span>
                      <strong>Open To Opportunities</strong>
                    </div>
                    <div className="portrait-meta-item">
                      <span>Focus</span>
                      <strong>Web App & Mini Program</strong>
                    </div>
                  </div>
                  <div className="portrait-pill-list">
                    {profilePills.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="about-panel">
              <span className="section-tag">About Me</span>
              <h2>个人经历与技术定位</h2>
              <p className="about-lead">
                目前就读于南京工业大学浦江学院计算机科学与技术专业，主修计算机组成原理、操作系统、计算机网络、数据结构与算法、移动应用开发和 Web 开发。除了课程学习，我也在持续通过项目实践强化独立开发能力。
              </p>
              <div className="info-grid">
                <div>
                  <span className="info-label">联系方式</span>
                  <p>15237687204</p>
                  <p>15237687204@163.com</p>
                </div>
                <div>
                  <span className="info-label">教育经历</span>
                  <p>南京工业大学浦江学院</p>
                  <p>计算机科学与技术 · 本科</p>
                </div>
              </div>
              <div className="metrics-grid">
                {metrics.map((item) => (
                  <div className="metric-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="container">
            <div className="projects-head">
              <div className="section-head">
                <span className="section-tag">Selected Works</span>
                <h2>项目经历</h2>
                <p>
                  这里不再直接平铺截图，而是改成更适合作品集阅读的案例结构。每个项目先展示关键信息，再通过展开方式查看界面和系统画面，让信息层级更清晰。
                </p>
              </div>
            </div>

            <div className="project-list">
              {projects.map((project, index) => {
                const expanded = openProject === index;
                const isCompactGallery = project.gallery.length <= 3;
                const galleryGridClass =
                  isCompactGallery
                    ? "project-gallery-grid project-gallery-grid-compact"
                    : "project-gallery-grid";
                const galleryDrawerClass =
                  isCompactGallery
                    ? "project-gallery-drawer project-gallery-drawer-compact"
                    : "project-gallery-drawer";
                const collageClass =
                  project.collageVariant === "duo"
                    ? "project-collage project-collage-duo"
                    : "project-collage";
                const collageImages =
                  project.collageVariant === "duo" ? project.gallery.slice(0, 2) : project.gallery.slice(0, 3);

                return (
                  <article className="project-showcase" key={project.title}>
                    <div className="project-showcase-visual" style={{ "--accent": project.accent }}>
                      <div className="project-visual-shell">
                        <div className="project-visual-top">
                          <span className="project-eyebrow">{project.eyebrow}</span>
                          <span className="project-year">{project.yearLabel ?? project.period.slice(0, 4)}</span>
                        </div>

                        <div className={collageClass}>
                          {collageImages.map((image, imageIndex) => (
                            <button
                              key={image.src}
                              type="button"
                              className={`project-collage-shot project-collage-shot-${imageIndex + 1}`}
                              onClick={() => setLightboxImage(image)}
                            >
                              <img src={image.src} alt={image.alt} />
                            </button>
                          ))}
                        </div>

                        <div className="project-visual-copy">
                          <h3>{project.title}</h3>
                          <p>{project.highlights.slice(0, 1)[0]}</p>
                        </div>

                        <div className="project-feature-tags">
                          {project.featureTags.map((tag) => (
                            <span key={`${project.title}-${tag}`}>{tag}</span>
                          ))}
                        </div>

                        <div className="project-visual-footer">
                          <span>点击图片可放大查看</span>
                          <button
                            className={`project-inline-toggle ${expanded ? "project-inline-toggle-active" : ""}`}
                            type="button"
                            onClick={() => setOpenProject(expanded ? -1 : index)}
                          >
                            {expanded ? "收起案例册" : "展开案例册"}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="project-showcase-body">
                      <div className="project-summary-row">
                        <div>
                          <span className="project-label">项目时间</span>
                          <p>{project.period}</p>
                        </div>
                        <div>
                          <span className="project-label">项目角色</span>
                          <p>{project.role}</p>
                        </div>
                      </div>

                      <div className="project-stack">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <div className="project-detail-block">
                        <span className="project-label">项目概述</span>
                        <p>{project.summary}</p>
                      </div>

                      <div className="project-detail-block">
                        <span className="project-label">核心实现</span>
                        <ul className="project-points">
                          {project.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-takeaway">
                        <span className="project-label">项目收获</span>
                        <p>{project.takeaway}</p>
                      </div>

                      {expanded ? (
                        <div className={galleryDrawerClass}>
                          {isCompactGallery ? (
                            <div className={galleryGridClass}>
                              {project.gallery.map((image) => (
                                <button
                                  type="button"
                                  className="project-gallery-thumb project-gallery-thumb-compact"
                                  key={image.src}
                                  onClick={() => setLightboxImage(image)}
                                >
                                  <img src={image.src} alt={image.alt} />
                                  <span>{image.label}</span>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <>
                              <div className="project-gallery-main">
                                <button
                                  type="button"
                                  className="project-gallery-open"
                                  onClick={() => setLightboxImage(project.gallery[0])}
                                >
                                  <img src={project.gallery[0].src} alt={project.gallery[0].alt} />
                                </button>
                                <span>{project.gallery[0].label}</span>
                              </div>
                              <div className={galleryGridClass}>
                                {project.gallery.slice(1).map((image) => (
                                  <button
                                    type="button"
                                    className="project-gallery-thumb"
                                    key={image.src}
                                    onClick={() => setLightboxImage(image)}
                                  >
                                    <img src={image.src} alt={image.alt} />
                                    <span>{image.label}</span>
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="strengths-section" id="strengths">
          <div className="container">
            <div className="strengths-layout">
              <div className="strengths-intro">
                <span className="section-tag">Core Strengths</span>
                <h2>个人优势</h2>
                <p className="strengths-copy">
                  我更希望自己不是只会写页面的人，而是能从技术选型、功能拆分到实际交付都持续推进的开发者。
                </p>
                <div className="strengths-highlight">
                  <strong>关键词</strong>
                  <p>前端实现力、工程意识、快速学习、AI 协同开发</p>
                </div>
              </div>
              <div className="strength-grid">
                {strengths.map((strength, index) => (
                  <article
                    className={`strength-card ${index === 0 ? "strength-card-featured" : ""}`}
                    key={strength.title}
                  >
                    <span className="strength-index">0{index + 1}</span>
                    <h3>{strength.title}</h3>
                    <p>{strength.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-wrap">
            <span className="section-tag">Let&apos;s Connect</span>
            <h2>如果你正在寻找一位专注前端实现、能够独立推进项目的开发者。希望能给一个展示的机会。</h2>
            <p>
              我希望参与 Web 前端开发、校园项目、初级软件工程岗位以及能够持续积累真实业务经验的机会。
            </p>
            <div className="contact-links">
              <a href="mailto:15237687204@163.com">15237687204@163.com</a>
              <a href="tel:15237687204">15237687204</a>
            </div>
          </div>
        </section>
      </main>

      {lightboxImage ? (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)} role="presentation">
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <button className="lightbox-close" type="button" onClick={() => setLightboxImage(null)}>
              Close
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
            <div className="lightbox-caption">{lightboxImage.label}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
