export const portfolioData = {
    // ข้อมูลส่วนตัว
    personal: {
        firstName: "Sasithorn",
        lastName: "Design",
        role: "Digital Designer & UI Developer",
        bio: "สวัสดีครับ ผมเป็นนักออกแบบและพัฒนาเว็บไซต์ที่หลงใหลในความเรียบง่าย (Minimalism) ผมเชื่อว่าการออกแบบที่ดีคือการตัดทอนสิ่งที่ไม่จำเป็นออกไป และเหลือไว้เพียงแก่นแท้ที่สื่อสารได้อย่างชัดเจนและใช้งานง่าย",
        profileImage: "",
        email: "hello@sompongdesign.com",
        phone: "+66 81 234 5678",
        location: "Bangkok, Thailand"
    },

    // โซเชียลมีเดีย
    social: [
        { name: "Behance", url: "#", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13h-7c.1 2.8 2.3 3 4.2 3 1.3 0 2.4-.6 3-1.6l2 1.4c-1.2 2-3.4 3.2-5.7 3.2-4.5 0-6.5-3.3-6.5-7s2.5-7 6.5-7c4 0 6 3 6 7v1z"/><path d="M16 11h-4c-.1-2.4 1.7-3 3-3 1.5 0 2.9.8 3 3z"/><path d="M11 19H4V5h7c3 0 5 1.7 5 4.5 0 1.6-.8 3-2.2 3.8 1.8.6 2.8 2 2.8 4.2 0 2.9-2 4.5-5.6 4.5z"/><path d="M4 11h6c1.5 0 2.5-.8 2.5-2S11.5 7 10 7H4v4z"/><path d="M4 19h6.5c1.8 0 3-.8 3-2.5 0-1.8-1.2-2.5-3-2.5H4v5z"/></svg>` },
        { name: "LinkedIn", url: "#", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>` },
        { name: "GitHub", url: "#", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>` }
    ],

    // ข้อมูลผลงาน
    projects: [
        {
            id: 1,
            title: "KINFOLK - Magazine Layout",
            category: "Editorial Design",
            thumbnail: "/images/project1-thumb.jpg",
            images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
            description: "โปรเจกต์ออกแบบ Layout นิตยสารที่เน้นการใช้พื้นที่ว่าง (White Space) และการจัดวาง Typography แบบคลาสสิก เพื่อให้อ่านง่ายและดูสะอาดตา โปรเจกต์นี้ครอบคลุมการจัดกริดระบบ (Grid System) และการเลือกใช้ภาพถ่ายที่สอดคล้องกับเนื้อหา",
            year: "2024",
            tools: "Adobe InDesign, Photoshop"
        },
        {
            id: 2,
            title: "ESSENTIALS - E-Commerce",
            category: "Web Design / UI",
            thumbnail: "/images/project2-thumb.jpg",
            images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
            description: "ออกแบบหน้าเว็บไซต์ E-Commerce สำหรับแบรนด์เสื้อผ้าสไตล์ Minimalist ที่ต้องการให้ประสบการณ์การช้อปปิ้งออนไลน์เป็นไปอย่างราบรื่น ไม่ซับซ้อน โดยใช้โทนสีเอกรงค์ (Monochrome) และเส้นขอบที่บางเบา",
            year: "2023",
            tools: "Figma, Tailwind CSS"
        },
        {
            id: 3,
            title: "LUMINA - Smart Home App",
            category: "App Design",
            thumbnail: "/images/project3-thumb.jpg",
            images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
            description: "แอปพลิเคชันควบคุมบ้านอัจฉริยะ ออกแบบ UI/UX โดยคำนึงถึงการใช้งานที่ง่ายที่สุด ลดปุ่มที่ซับซ้อนและใช้การควบคุมผ่าน Gestures สร้างในรูปแบบ Flat Design ที่ดูเป็นมิตรและทันสมัย",
            year: "2023",
            tools: "Figma, Protopie"
        },
        {
            id: 4,
            title: "AURA - Skincare Branding",
            category: "Branding & Packaging",
            thumbnail: "/images/project4-thumb.jpg",
            images: ["/images/project4-1.jpg", "/images/project4-2.jpg"],
            description: "งานออกแบบอัตลักษณ์องค์กร (Brand Identity) และบรรจุภัณฑ์สำหรับแบรนด์สกินแคร์ออร์แกนิค เน้นการใช้สีที่มาจากธรรมชาติ (Earth Tones) เลย์เอาต์เรียบง่ายและฟอนต์ที่ดูอ่อนโยน",
            year: "2022",
            tools: "Adobe Illustrator, Dimension"
        },
        {
            id: 5,
            title: "NOMAD - Travel Blog",
            category: "Web Development",
            thumbnail: "/images/project5-thumb.jpg",
            images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
            description: "พัฒนาธีมบล็อกสำหรับนักเดินทาง โครงสร้างเน้นการอ่านเนื้อหาเป็นหลัก (Reader-centric) ไม่มี Pop-up กวนใจ โค้ดคลีนและโหลดเร็วมาก พัฒนาด้วยเทคโนโลยีล่าสุด",
            year: "2022",
            tools: "HTML/CSS, Vanilla JS"
        }
    ]
};
