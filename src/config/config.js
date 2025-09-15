const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Undangan Pernikahan",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "UDIN",
    // Bride's name
    brideName: "ARUM",
    // Groom's parents names
    parentGroom: "ach. tamtowi & umi solekah",
    // Bride's parents names
    parentBride: "mashudi (alm) & siti khobsoh",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-10-13",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/bYJS5Nt7FMrBr1yG9",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.4634468156646!2d112.1743187!3d-7.8464666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785f6c8d56efc1%3A0xc5ecd74eecc4d1ff!2sToko%20Sinar%20Cahaya!5e0!3m2!1sid!2sid!4v1757945794827!5m2!1sid!2sid",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "09:00 - selesai WIB",
    // Venue/building name
    location: "Grand Ballroom, Hotel Majesty",
    // Full address of the wedding venue
    address: "Jl. Jend. Sudirman No.1, Jakarta",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Akad Nikah",
        // Event date (format: YYYY-MM-DD)
        date: "2025-10-12",
        // Start time (format: HH:MM)
        startTime: "08:00",
        // End time (format: HH:MM)
        endTime: "selesai",
        // Event venue
        location: "Grand Ballroom, Hotel Majesty",
        // Full address
        address: "balong jambe, badas",
      },
      {
        // Second event name
        title: "Resepsi Nikah",
        date: "2025-10-13",
        startTime: "09:00",
        endTime: "selesai",
        location: "Rumah Mempelai Pria",
        address: "dermo banjarjo, pranggang, plosoklaten",
      },
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true,
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      },
      // You can add more banks with the same format
    ],
  },
};

export default config;