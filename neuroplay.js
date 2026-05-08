// =========================================================
  // CATÁLOGO — Para agregar un producto nuevo copia uno de
  // los objetos y edita sus campos. Campos disponibles:
  // imgs: hasta 3 imágenes (se ven en el modal de detalle)
  // skills: habilidades que desarrolla
  // players: número de jugadores
  // mpLink: link de pago de Mercado Pago (null si no tiene)
  // =========================================================
  var products = [
    {
      id:1, name:"Polilla Tramposa",
      desc:"Juego terapéutico de cartas donde ¡se pueden hacer trampas! Convierte el momento de juego en una oportunidad de aprendizaje. Recomendado para niños con TDAH, dificultades de atención o impulsividad.",
      skills:"Atención · Autocontrol · Habilidades sociales · Tolerancia a la frustración",
      ages:"7-12 años", players:"2-5 jugadores", minAge:7, maxAge:12,
      ageGroups:['6-8','9-12'],
      price:49, orig:null,
      imgs:["POLILLA_TRAMPOSA.webp","POLILLA_TRAMPOSA_2.webp"],
      cat:"logica", badge:"hot", mpLink:"https://mpago.la/2Hhxjro"
    },
    {
      id:2, name:"Stacking Fun",
      desc:"¡Apila los platos antes que el tiempo acabe! Juego de habilidad y velocidad para toda la familia. Incluye base giratoria, piezas de colores y reloj de arena.",
      skills:"Motricidad fina · Velocidad de reacción · Coordinación ojo-mano · Concentración",
      ages:"3-7 años", players:"1-4 jugadores", minAge:3, maxAge:7,
      ageGroups:['3-5','6-8'],
      price:25, orig:null,
      imgs:["STACKING_FUN.webp","STACKING_FUN_2.webp"],
      cat:"motor", badge:"new", mpLink:"https://mpago.la/32QGsK3"
    },
    {
      id:3, name:"5 Sentidos",
      desc:"Juego didáctico para explorar y aprender los 5 sentidos: vista, oído, olfato, gusto y tacto. Ideal para estimulación sensorial temprana en niños.",
      skills:"Estimulación sensorial · Vocabulario · Atención · Discriminación perceptiva",
      ages:"4-12 años", players:"2-3 jugadores", minAge:4, maxAge:12,
      ageGroups:['3-5','6-8','9-12'],
      price:29, orig:null,
      imgs:["5_SENTIDOS.webp","5_SENTIDOS_2.webp"],
      cat:"ciencias", badge:"new", mpLink:"https://mpago.la/2hSKU23"
    },
    {
      id:4, name:"Anger Management Cards",
      desc:"42+ tarjetas con actividades para calmar la mente y el cuerpo. Herramienta terapéutica para manejar la ira y las emociones difíciles en niños.",
      skills:"Regulación emocional · Autocontrol · Mindfulness · Manejo de la ira",
      ages:"4-12 años", players:"Individual o 2 jugadores", minAge:4, maxAge:12,
      ageGroups:['3-5','6-8','9-12'],
      price:29, orig:null,
      imgs:["ANGER_MANAGEMENT.webp","ANGER_MANAGEMENT_2.webp"],
      cat:"logica", badge:"new", mpLink:"https://mpago.la/2zAffFE"
    },
    {
      id:5, name:"Bloques Lógicos Premium",
      desc:"Desarrolla clasificación, seriación y lógica matemática con bloques de colores y formas variadas.",
      skills:"Lógica · Clasificación · Pensamiento matemático · Creatividad",
      ages:"3-6 años", players:"1-4 jugadores", minAge:3, maxAge:6,
      ageGroups:['3-5'],
      price:89, orig:120, imgs:[], emoji:"🟦",
      cat:"logica", badge:null, mpLink:null
    },
    {
      id:6, name:"Kit Científico Explorador",
      desc:"30 experimentos caseros fáciles y seguros para despertar la curiosidad científica en los niños.",
      skills:"Pensamiento científico · Observación · Experimentación · Creatividad",
      ages:"6-10 años", players:"1-3 jugadores", minAge:6, maxAge:10,
      ageGroups:['6-8','9-12'],
      price:129, orig:160, imgs:[], emoji:"🔬",
      cat:"ciencias", badge:null, mpLink:null
    },
    {
      id:7, name:"Rompecabezas 3D Mundo",
      desc:"Mapa mundi tridimensional con 200 piezas y colores vivos para aprender geografía jugando.",
      skills:"Paciencia · Concentración · Geografía · Pensamiento espacial",
      ages:"5-9 años", players:"1-4 jugadores", minAge:5, maxAge:9,
      ageGroups:['3-5','6-8'],
      price:75, orig:null, imgs:[], emoji:"🌍",
      cat:"logica", badge:null, mpLink:null
    },
    {
      id:8, name:"Arte con Arcilla Mágica",
      desc:"Arcilla moldeable y segura en 12 colores brillantes para liberar la creatividad de los niños.",
      skills:"Creatividad · Motricidad fina · Expresión artística · Imaginación",
      ages:"4-8 años", players:"1+ jugadores", minAge:4, maxAge:8,
      ageGroups:['3-5','6-8'],
      price:55, orig:70, imgs:[], emoji:"🎨",
      cat:"arte", badge:null, mpLink:null
    },
    {
      id:9, name:"Abecedario Magnético",
      desc:"Letras y números magnéticos con tablero incluido para aprender de forma divertida.",
      skills:"Lectura · Escritura · Reconocimiento de letras · Matemáticas básicas",
      ages:"3-6 años", players:"1-2 jugadores", minAge:3, maxAge:6,
      ageGroups:['3-5'],
      price:65, orig:null, imgs:[], emoji:"🔤",
      cat:"letras", badge:null, mpLink:null
    },
    {
      id:10, name:"Dominó de Fracciones",
      desc:"Aprende fracciones jugando con fichas coloridas. Ideal para reforzar matemáticas de forma lúdica.",
      skills:"Fracciones · Lógica matemática · Concentración · Estrategia",
      ages:"7-12 años", players:"2-4 jugadores", minAge:7, maxAge:12,
      ageGroups:['6-8','9-12'],
      price:49, orig:60, imgs:[], emoji:"🀱",
      cat:"matematicas", badge:null, mpLink:null
    },
    {
      id:11, name:"Torre de Equilibrio",
      desc:"Desarrolla concentración y motricidad fina apilando piezas sin que caiga la torre.",
      skills:"Motricidad fina · Concentración · Paciencia · Coordinación",
      ages:"2-5 años", players:"1-4 jugadores", minAge:2, maxAge:5,
      ageGroups:['0-2','3-5'],
      price:95, orig:null, imgs:[], emoji:"🏗️",
      cat:"motor", badge:null, mpLink:null
    },
    {
      id:12, name:"Cuentos STEM para Niñas",
      desc:"6 libros ilustrados sobre mujeres en ciencias que inspiran a las futuras científicas.",
      skills:"Lectura · Inspiración · Vocabulario científico · Valores",
      ages:"5-10 años", players:"Individual", minAge:5, maxAge:10,
      ageGroups:['3-5','6-8'],
      price:110, orig:140, imgs:[], emoji:"📚",
      cat:"letras", badge:null, mpLink:null
    }
  ];

  var cart = [];
  var currentCat = 'todos';
  var searchQ = '';

  // =============================================
  // SANITIZACIÓN ANTI-XSS
  // Escapa caracteres peligrosos antes de insertar
  // cualquier texto en el DOM via innerHTML
  // =============================================
  function sanitize(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#x27;')
      .replace(/\//g, '&#x2F;')
      .replace(/`/g,  '&#x60;')
      .replace(/=/g,  '&#x3D;');
  }

  // Versión segura para URLs (hrefs y srcs)
  function sanitizeUrl(url) {
    if (!url) return '';
    var clean = String(url).trim();
    // Solo permite http, https y data (no javascript:)
    if (/^javascript:/i.test(clean)) return '#';
    if (/^data:(?!image)/i.test(clean)) return '#';
    return clean;
  }

  function getBg(cat) {
    var m = {logica:'#FFF0E8',ciencias:'#E8F8FF',arte:'#FFF0F8',letras:'#F0F0FF',matematicas:'#EAFFF7',motor:'#FFF8E8'};
    return m[cat]||'#F8F8F8';
  }

  function renderProducts() {
    var grid = document.getElementById('products-grid');
    var sq = searchQ.toLowerCase();
    var filtered = products.filter(function(p){
      return (currentCat==='todos'||p.cat===currentCat) &&
             (p.name.toLowerCase().includes(sq)||p.desc.toLowerCase().includes(sq));
    });
    if (!filtered.length) {
      grid.textContent = ''; // limpiar de forma segura
      var msg = document.createElement('p');
      msg.style.color = 'var(--text-muted)';
      msg.style.padding = '2rem 0';
      msg.textContent = 'No se encontraron productos.';
      grid.appendChild(msg);
      return;
    }
    var html = '';
    filtered.forEach(function(p){
      var thumb = (p.imgs&&p.imgs.length>0) ? p.imgs[0] : null;
      var imgArea = thumb
        ? '<img src="'+sanitizeUrl(thumb)+'" alt="'+sanitize(p.name)+'" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;cursor:pointer;" onclick="openDetail('+parseInt(p.id)+')">'
        : '<span style="font-size:4rem;cursor:pointer;" onclick="openDetail('+parseInt(p.id)+')">'+sanitize(p.emoji||'🎮')+'</span>';
      html += '<div class="product-card" id="pc-'+parseInt(p.id)+'">'
            + '<div class="product-img" style="background:'+getBg(p.cat)+';position:relative;overflow:hidden;">'
            + (p.badge ? '<span class="badge '+(p.badge==='hot'?'hot':'new')+'">'+(p.badge==='hot'?'🔥 Popular':'🆕 Nuevo')+'</span>' : '')
            + imgArea
            + '</div>'
            + '<div class="product-info">'
            + '<div class="product-ages">⏱ '+sanitize(p.ages)+'</div>'
            + '<div class="product-name">'+sanitize(p.name)+'</div>'
            + '<div class="product-footer">'
            + '<div class="product-price">'+(p.orig?'<small>S/ '+parseInt(p.orig)+'</small>':'')+'S/ '+parseInt(p.price)+'</div>'
            + '<button class="btn-detail" onclick="openDetail('+parseInt(p.id)+')">Ver más →</button>'
            + '</div></div></div>';
    });
    grid.innerHTML = html;
  }

  function filterCat(cat, el) {
    currentCat = cat;
    document.querySelectorAll('.cat-pill').forEach(function(p){p.classList.remove('active');});
    el.classList.add('active');
    renderProducts();
  }

  function filterProducts() {
    // Sanitizar el input antes de usarlo para filtrar
    var raw = document.getElementById('search-input').value;
    // Limitar a 100 caracteres y eliminar caracteres de control
    searchQ = raw.slice(0, 100).replace(/[\x00-\x1F\x7F]/g, '');
    renderProducts();
  }

  function filterByAge(range) {
    var ranges = { '0-2':{min:0,max:2}, '3-5':{min:3,max:5}, '6-8':{min:6,max:8}, '9-12':{min:9,max:12} };
    var labels = { '0-2':'0 a 2 años', '3-5':'3 a 5 años', '6-8':'6 a 8 años', '9-12':'9 a 12 años' };
    var r = ranges[range];
    if (!r) return;

    // 1. Resetear todos los filtros activos
    currentCat = 'todos';
    searchQ = '';
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.cat-pill').forEach(function(p){ p.classList.remove('active'); });
    document.querySelector('.cat-pill').classList.add('active');

    // 2. Filtrar productos usando ageGroups exactos
    var filtered = products.filter(function(p) {
      return p.ageGroups && p.ageGroups.indexOf(range) !== -1;
    });

    // 3. Scroll suave a la sección de productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });

    // 4. Construir el HTML de resultados
    setTimeout(function() {
      var grid = document.getElementById('products-grid');
      var html = '';

      // Cabecera de resultados
      var labelSafe = sanitize(labels[range]);
      html += '<div style="grid-column:1/-1; background:linear-gradient(135deg,#FFF5EE,#F0FFFE); border-radius:14px; padding:1rem 1.2rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:0.5rem;">'
            + '<div>'
            + '<span style="font-family:\'Fredoka One\',cursive;font-size:1.1rem;color:var(--primary);">🎯 Juegos para '+labelSafe+'</span>'
            + '<span style="display:block;font-size:0.78rem;color:var(--text-muted);margin-top:2px;">'+(filtered.length>0?filtered.length+' juego'+(filtered.length>1?'s':'')+' encontrado'+(filtered.length>1?'s':''):'Sin resultados aún')+'</span>'
            + '</div>'
            + '<button onclick="renderProducts()" style="background:transparent;border:2px solid var(--primary);color:var(--primary);border-radius:50px;padding:6px 14px;font-family:\'Nunito\',sans-serif;font-weight:800;font-size:0.78rem;cursor:pointer;">✕ Ver todos</button>'
            + '</div>';

      if (filtered.length === 0) {
        html += '<div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;">'
              + '<div style="font-size:3rem;margin-bottom:1rem;">🔍</div>'
              + '<p style="font-family:\'Fredoka One\',cursive;font-size:1.2rem;color:var(--text);margin-bottom:0.5rem;">Próximamente para esta edad</p>'
              + '<p style="font-size:0.85rem;color:var(--text-muted);">Estamos seleccionando los mejores juegos para ' + labels[range] + '. ¡Síguenos para enterarte!</p>'
              + '<a href="https://wa.me/51936710169?text=Hola%20Neuro%20Play%2C%20busco%20juegos%20para%20ni%C3%B1os%20de%20' + range + '%20a%C3%B1os" target="_blank" style="display:inline-block;margin-top:1rem;background:var(--primary);color:#fff;border-radius:50px;padding:10px 20px;text-decoration:none;font-weight:800;font-size:0.85rem;">💬 Consultar por WhatsApp</a>'
              + '</div>';
      } else {
        filtered.forEach(function(p) {
          var thumb = p.imgs && p.imgs.length > 0 ? p.imgs[0] : null;
          html += '<div class="product-card" id="pc-' + parseInt(p.id) + '">'
                + '<div class="product-img" style="background:' + getBg(p.cat) + ';position:relative;overflow:hidden;">'
                + (p.badge ? '<span class="badge ' + (p.badge === 'hot' ? 'hot' : 'new') + '">' + (p.badge === 'hot' ? '🔥 Popular' : '🆕 Nuevo') + '</span>' : '')
                + (thumb
                  ? '<img src="' + sanitizeUrl(thumb) + '" alt="' + sanitize(p.name) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;cursor:pointer;" onclick="openDetail(' + parseInt(p.id) + ')">'
                  : '<span style="font-size:4rem;cursor:pointer;" onclick="openDetail(' + parseInt(p.id) + ')">' + sanitize(p.emoji || '🎮') + '</span>')
                + '</div>'
                + '<div class="product-info">'
                + '<div class="product-ages">⏱ ' + sanitize(p.ages) + '</div>'
                + '<div class="product-name">' + sanitize(p.name) + '</div>'
                + '<div class="product-footer">'
                + '<div class="product-price">' + (p.orig ? '<small>S/ ' + parseInt(p.orig) + '</small>' : '') + 'S/ ' + parseInt(p.price) + '</div>'
                + '<button class="btn-detail" onclick="openDetail(' + parseInt(p.id) + ')">Ver más →</button>'
                + '</div></div></div>';
        });
      }

      grid.innerHTML = html;
    }, 400);
  }

  // MODAL DETALLE
  var detailIdx = 0;
  var detailP = null;

  function openDetail(id) {
    detailP = products.find(function(x){return x.id===id;});
    if (!detailP) return;
    detailIdx = 0;
    buildDetail();
    document.getElementById('detail-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDetail() {
    document.getElementById('detail-modal').classList.remove('open');
    document.body.style.overflow = '';
  }

  function buildDetail() {
    var p = detailP;
    var hasImgs = p.imgs && p.imgs.length > 0;
    var total = hasImgs ? p.imgs.length : 0;

    var gal = '<div class="dm-gallery">';
    if (hasImgs) {
      gal += '<div class="dm-main-img"><img src="'+sanitizeUrl(p.imgs[0])+'" id="dm-main-img" alt="'+sanitize(p.name)+'" loading="eager" decoding="async">'
           + '</div>';
      if (total>1) {
        gal += '<div class="dm-thumbs">';
        for (var i=0;i<total;i++) gal += '<img src="'+sanitizeUrl(p.imgs[i])+'" class="dm-thumb'+(i===0?' dm-thumb-on':'')+'" onclick="dGo('+parseInt(i)+')" alt="'+sanitize(p.name)+' foto '+(i+1)+'" loading="lazy">';
        gal += '</div>';
      }
    } else {
      gal += '<div class="dm-main-img" style="font-size:5rem;display:flex;align-items:center;justify-content:center;">'+sanitize(p.emoji||'🎮')+'</div>';
    }
    gal += '</div>';

    var info = '<div class="dm-info">'
      +(p.badge?'<span class="badge '+(p.badge==='hot'?'hot':'new')+'" style="position:static;display:inline-block;margin-bottom:8px;">'+(p.badge==='hot'?'🔥 Popular':'🆕 Nuevo')+'</span>':'')
      +'<h2 class="dm-name">'+sanitize(p.name)+'</h2>'
      +'<div class="dm-meta"><span>⏱ '+sanitize(p.ages)+'</span><span>👥 '+sanitize(p.players)+'</span></div>'
      +'<div class="dm-section"><div class="dm-section-title">📖 Descripción</div><p class="dm-text">'+sanitize(p.desc)+'</p></div>'
      +'<div class="dm-section"><div class="dm-section-title">🧠 Habilidades que desarrolla</div><p class="dm-text">'+sanitize(p.skills)+'</p></div>'
      +'<div class="dm-price-row">'+(p.orig?'<span class="dm-orig">S/ '+parseInt(p.orig||0)+'</span>':'')+'<span class="dm-price">S/ '+parseInt(p.price||0)+'</span></div>'
      +'<div class="dm-btns">'
      +'<button class="btn-primary" onclick="addFromDetail('+parseInt(p.id)+')">🛒 Agregar al carrito</button>'
      +'</div></div>';

    document.getElementById('detail-body').innerHTML = gal + info;
  }

  function dSlide(dir) {
    detailIdx = (detailIdx + dir + detailP.imgs.length) % detailP.imgs.length;
    dUpdateImg();
  }

  function dGo(i) { detailIdx = parseInt(i)||0; dUpdateImg(); }

  function dUpdateImg() {
    var img = document.getElementById('dm-main-img');
    if (img && detailP.imgs[detailIdx]) img.src = sanitizeUrl(detailP.imgs[detailIdx]);
    document.querySelectorAll('.dm-thumb').forEach(function(t,i){
      t.className = 'dm-thumb'+(i===detailIdx?' dm-thumb-on':'');
    });
  }

  function addFromDetail(id) { addToCart(id); closeDetail(); }

  // =============================================
  // STOCK MÁXIMO POR PRODUCTO
  // Cambia estos valores según tu inventario real
  // =============================================
  var STOCK = {
    1: 10,  // Polilla Tramposa
    2: 15,  // Stacking Fun
    3: 12,  // 5 Sentidos
    4: 10,  // Anger Management
    5: 5,   // Bloques Lógicos
    6: 5,   // Kit Científico
    7: 8,   // Rompecabezas 3D
    8: 10,  // Arcilla Mágica
    9: 8,   // Abecedario Magnético
    10: 6,  // Dominó de Fracciones
    11: 5,  // Torre de Equilibrio
    12: 7,  // Cuentos STEM
  };
  var MAX_QTY_POR_PRODUCTO = 5; // máximo por producto por pedido
  var MAX_ITEMS_CARRITO    = 10; // máximo total de items en el carrito

  // CARRITO — Solo guarda id, nombre, imgs y qty. NUNCA el precio.
  function addToCart(id) {
    var p = products.find(function(x){ return x.id === id; });
    if (!p) return;

    // Validar stock disponible
    var stockDisponible = STOCK[id] !== undefined ? STOCK[id] : 0;
    if (stockDisponible <= 0) {
      showToast('⚠️ ' + p.name + ' sin stock');
      return;
    }

    var ex = cart.find(function(x){ return x.id === id; });
    var qtyActual = ex ? ex.qty : 0;

    // Validar límite por producto
    if (qtyActual >= MAX_QTY_POR_PRODUCTO) {
      showToast('⚠️ Máximo ' + MAX_QTY_POR_PRODUCTO + ' unidades por producto');
      return;
    }

    // Validar que no supere el stock real
    if (qtyActual >= stockDisponible) {
      showToast('⚠️ Solo hay ' + stockDisponible + ' en stock');
      return;
    }

    // Validar total de items en el carrito
    var totalItems = cart.reduce(function(s, x){ return s + x.qty; }, 0);
    if (totalItems >= MAX_ITEMS_CARRITO) {
      showToast('⚠️ Máximo ' + MAX_ITEMS_CARRITO + ' items por pedido');
      return;
    }

    if (ex) {
      ex.qty++;
    } else {
      cart.push({
        id:            p.id,
        name:          p.name,
        imgs:          p.imgs || [],
        emoji:         p.emoji || '🎮',
        qty:           1,
        mpLink:        p.mpLink || null,
        _displayPrice: p.price,
      });
    }

    saveCart();
    updateCartCount();
    showToast('✓ ' + p.name + ' agregado');
  }

  // =============================================
  // PERSISTENCIA DEL CARRITO — sessionStorage
  // Se mantiene durante la sesión del navegador
  // Se limpia al cerrar la pestaña (más seguro que localStorage)
  // =============================================
  function saveCart() {
    try {
      // Solo guardar datos mínimos necesarios (nunca precios)
      var cartData = cart.map(function(x){
        return { id: x.id, qty: x.qty };
      });
      sessionStorage.setItem('np_cart', JSON.stringify(cartData));
    } catch(e) {
      // Si sessionStorage no está disponible, continuar sin persistencia
      console.warn('sessionStorage no disponible');
    }
  }

  function loadCart() {
    try {
      var raw = sessionStorage.getItem('np_cart');
      if (!raw) return;
      var saved = JSON.parse(raw);
      if (!Array.isArray(saved)) return;
      saved.forEach(function(item) {
        var id  = parseInt(item.id);
        var qty = parseInt(item.qty);
        // Validar que el producto existe y los datos son válidos
        if (!id || isNaN(id) || !qty || isNaN(qty) || qty < 1) return;
        var p = products.find(function(x){ return x.id === id; });
        if (!p) return;
        // Validar contra stock actual
        var stockDisponible = STOCK[id] !== undefined ? STOCK[id] : 0;
        var qtyFinal = Math.min(qty, MAX_QTY_POR_PRODUCTO, stockDisponible);
        if (qtyFinal <= 0) return;
        cart.push({
          id:            p.id,
          name:          p.name,
          imgs:          p.imgs || [],
          emoji:         p.emoji || '🎮',
          qty:           qtyFinal,
          mpLink:        p.mpLink || null,
          _displayPrice: p.price,
        });
      });
      updateCartCount();
    } catch(e) {
      // Si hay error al cargar, ignorar y empezar con carrito vacío
      sessionStorage.removeItem('np_cart');
    }
  }

  function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.reduce(function(s,x){return s+x.qty;},0);
  }

  function openCart() { renderCartModal(); document.getElementById('cart-modal').classList.add('open'); }
  function closeCart() { document.getElementById('cart-modal').classList.remove('open'); }

  function renderCartModal() {
    var list = document.getElementById('cart-items-list');
    var area = document.getElementById('cart-checkout-area');
    if (!cart.length) {
      list.innerHTML='<div class="cart-empty">🛒<br>Tu carrito está vacío<br>¡Agrega algunos juegos!</div>';
      area.innerHTML=''; return;
    }
    list.innerHTML = cart.map(function(item){
      var th = (item.imgs&&item.imgs.length>0)
        ? '<img src="'+sanitizeUrl(item.imgs[0])+'" style="width:40px;height:40px;object-fit:contain;border-radius:8px;background:#f5f5f5;" alt="'+sanitize(item.name)+'">'
        : sanitize(item.emoji||'🎮');
      return '<div class="cart-item"><span class="cart-item-emoji">'+th+'</span>'
        +'<div class="cart-item-info"><div class="cart-item-name">'+sanitize(item.name)+'</div>'
        +'<div style="font-size:0.78rem;color:var(--text-muted)">Cant: '+parseInt(item.qty)+'</div></div>'
        +'<span class="cart-item-price">S/ '+(parseInt(item._displayPrice)*parseInt(item.qty))+'</span>'
        +'<button class="cart-remove" onclick="removeFromCart('+parseInt(item.id)+')">✕</button></div>';
    }).join('');
    var totalDisplay = cart.reduce(function(s,x){return s+(parseInt(x._displayPrice)*parseInt(x.qty));},0);
    area.innerHTML=
      '<div class="cart-total">Total referencial: S/ '+totalDisplay+'</div>'
      +'<div style="font-size:0.72rem;color:var(--text-muted);text-align:center;margin-bottom:0.5rem;">✅ El total oficial se confirma al momento del pago</div>'
      +'<button class="btn-checkout" onclick="openPayment()">Elegir método de pago →</button>';
  }

  function removeFromCart(id) {
    cart = cart.filter(function(x){ return x.id !== id; });
    saveCart();
    updateCartCount();
    renderCartModal();
  }

  // =============================================
  // CONFIGURACIÓN WEBHOOK
  // =============================================
  var WEBHOOK_URL = 'https://TU-URL-RAILWAY.up.railway.app';
  var ADMIN_TOKEN = 'TU_ADMIN_TOKEN';

  // Token del pedido validado por el servidor
  var _pedidoToken = null;
  var _pedidoTotal = 0;

  function openPayment() {
    closeCart();
    document.getElementById('payment-modal').classList.add('open');
    document.getElementById('yape-total').textContent = 'Verificando total...';
    document.getElementById('mp-total').textContent   = 'Verificando total...';

    // Enviar SOLO id y qty — nunca precios del cliente
    var itemsParaServidor = cart.map(function(x){
      return { id: x.id, qty: x.qty };
    });

    fetch(WEBHOOK_URL + '/calcular-pedido', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ items: itemsParaServidor }),
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
      if (!data.ok) {
        alert('Error al verificar el pedido: ' + (data.error || 'Inténtalo de nuevo'));
        closePayment(); return;
      }
      // Total OFICIAL del servidor — no se puede manipular desde el cliente
      _pedidoToken = data.token;
      _pedidoTotal = data.total;
      document.getElementById('yape-total').textContent = 'Total verificado: S/ ' + data.total;
      document.getElementById('mp-total').textContent   = 'Total verificado: S/ ' + data.total;
    })
    .catch(function(){
      // Fallback si Railway no disponible
      var total = cart.reduce(function(s,x){return s+(x._displayPrice*x.qty);},0);
      _pedidoToken = null;
      _pedidoTotal = total;
      document.getElementById('yape-total').textContent = 'Total: S/ ' + total;
      document.getElementById('mp-total').textContent   = 'Total: S/ ' + total;
    });
  }

  function closePayment() { document.getElementById('payment-modal').classList.remove('open'); }

  function switchTab(tab, el) {
    document.querySelectorAll('.pay-tab').forEach(function(t){t.classList.remove('active');});
    document.querySelectorAll('.pay-panel').forEach(function(p){p.classList.remove('active');});
    el.classList.add('active');
    document.getElementById('panel-'+tab).classList.add('active');
  }

  // =============================================
  // YAPE — Mensaje generado por el servidor
  // =============================================
  function confirmYape() {
    if (!_pedidoToken) {
      // Fallback si servidor no disponible
      var total = _pedidoTotal || cart.reduce(function(s,x){return s+x.price*x.qty;},0);
      var items = cart.map(function(x){return encodeURIComponent('• '+sanitize(x.name)+' x'+parseInt(x.qty));}).join('%0A');
      window.open('https://wa.me/51936710169?text=Hola%20Neuro%20Play!%0AYa%20yap%C3%A9.%0A%0APedido%3A%0A'+items+'%0A%0ATotal%3A%20S%2F%20'+parseInt(total),'_blank','noopener,noreferrer');
      closePayment();
      mostrarConfirmacion('yape', total);
      return;
    }

    // Pedir al servidor que genere el mensaje con precios oficiales
    fetch(WEBHOOK_URL + '/generar-mensaje-yape', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ token: _pedidoToken }),
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (!data.ok) {
        alert(data.error || 'Error al generar el mensaje. Inténtalo de nuevo.');
        return;
      }
      // Abrir WhatsApp con mensaje generado por el servidor
      window.open(sanitizeUrl(data.url), '_blank', 'noopener,noreferrer');
      closePayment();
      mostrarConfirmacion('yape', data.total);
      _pedidoToken = null;
    })
    .catch(function() {
      alert('Error de conexión. Inténtalo de nuevo.');
    });
  }

  // =============================================
  // MERCADO PAGO
  // =============================================
  function goToMP() {
    var conLink = cart.filter(function(x){ return x.mpLink; });
    var sinLink = cart.filter(function(x){ return !x.mpLink; });

    if (conLink.length > 0) {
      window._mpPendientes = conLink;
      conLink.forEach(function(item){
        // Validar que el link sea seguro antes de abrir
        var url = sanitizeUrl(item.mpLink);
        if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer');
      });
      closePayment();
      mostrarEsperaVerificacion();
    }

    if (sinLink.length > 0) {
      var total = _pedidoTotal || sinLink.reduce(function(s,x){ return s+(parseInt(x._displayPrice||0)*parseInt(x.qty||1)); }, 0);
      var items = sinLink.map(function(x){ return encodeURIComponent('• '+x.name+' x'+x.qty); }).join('%0A');
      var url = 'https://wa.me/51936710169?text=Hola%20Neuro%20Play!%0AQuiero%20pagar%20por%20Mercado%20Pago%3A%0A'+items+'%0ATotal%3A%20S%2F%20'+parseInt(total);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    _pedidoToken = null;
  }

  // =============================================
  // PANTALLA ESPERA VERIFICACIÓN MP
  // =============================================
  function mostrarEsperaVerificacion() {
    var modal = document.getElementById('verificacion-modal');
    document.getElementById('verif-estado').innerHTML =
      '<div class="verif-spinner"></div>'
      +'<p style="font-weight:700;margin-top:1rem;">Esperando confirmación de pago...</p>'
      +'<p style="font-size:0.8rem;color:var(--text-muted);margin-top:0.5rem;">Completa el pago en Mercado Pago y regresa aquí</p>';
    document.getElementById('verif-btn').style.display = 'block';
    modal.classList.add('open');
  }

  // =============================================
  // VERIFICAR PAGO MP CON SERVIDOR
  // =============================================
  function verificarPagoMP() {
    var btn    = document.getElementById('verif-btn');
    var estado = document.getElementById('verif-estado');
    btn.disabled = true;
    btn.textContent = 'Verificando...';

    var urlParams = new URLSearchParams(window.location.search);
    var paymentId = urlParams.get('payment_id') || urlParams.get('collection_id');

    if (!paymentId) {
      // Modal propio en lugar de prompt() nativo
      estado.innerHTML =
        '<p style="font-weight:700;margin-bottom:0.8rem;">Ingresa el ID de tu pago</p>'
        +'<input id="payment-id-input" type="number" placeholder="Ej: 123456789" maxlength="20" '
        +'style="width:100%;border:2px solid #E8E8E8;border-radius:50px;padding:10px 16px;font-family:Nunito,sans-serif;font-size:0.95rem;outline:none;text-align:center;">'
        +'<p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem;">Lo encuentras en Mercado Pago → Actividad</p>'
        +'<button onclick="confirmarPaymentId()" class="btn-checkout" style="margin-top:0.8rem;">Verificar →</button>';
      btn.style.display = 'none';
      return;
    }
    ejecutarVerificacion(paymentId.replace(/\D/g,''), btn, estado);
  }

  function confirmarPaymentId() {
    var input = document.getElementById('payment-id-input');
    if (!input) return;
    var val = input.value.toString().replace(/\D/g,'');
    if (!val || val.length < 5) { input.style.borderColor='#e53'; input.focus(); return; }
    var btn    = document.getElementById('verif-btn');
    var estado = document.getElementById('verif-estado');
    estado.innerHTML = '<div class="verif-spinner"></div><p style="font-weight:700;margin-top:1rem;">Verificando pago...</p>';
    ejecutarVerificacion(val, btn, estado);
  }

  function ejecutarVerificacion(paymentId, btn, estado) {
    var controller = new AbortController();
    var timeoutId  = setTimeout(function(){ controller.abort(); }, 10000);

    fetch(WEBHOOK_URL + '/verificar-pago/' + encodeURIComponent(paymentId), {
      headers: { 'Authorization': 'Bearer ' + ADMIN_TOKEN },
      signal:  controller.signal,
    })
    .then(function(res){ clearTimeout(timeoutId); if(!res.ok) throw new Error('HTTP '+res.status); return res.json(); })
    .then(function(data){
      if (data.aprobado) {
        estado.innerHTML =
          '<div style="font-size:3rem;">✅</div>'
          +'<p style="font-family:\'Fredoka One\',cursive;font-size:1.3rem;color:var(--green);margin-top:0.5rem;">¡Pago verificado!</p>'
          +'<p style="font-size:0.85rem;color:var(--text-muted);">Monto: S/ '+parseInt(data.monto||0)+' · ID: '+sanitize(String(data.id||''))+'</p>'
          +'<p style="font-size:0.82rem;margin-top:0.5rem;">Te contactaremos para coordinar la entrega 🚚</p>';
        btn.style.display = 'none';
        cart = []; saveCart(); updateCartCount(); _pedidoToken = null;
        var items = (window._mpPendientes||[]).map(function(x){ return encodeURIComponent('• '+x.name); }).join('%0A');
        setTimeout(function(){
          window.open('https://wa.me/51936710169?text=Pago%20VERIFICADO%20%E2%9C%85%0AID%3A%20'+encodeURIComponent(data.id||'')+'%0AMonto%3A%20S%2F%20'+parseInt(data.monto||0)+'%0A%0A'+items,'_blank','noopener,noreferrer');
        }, 1500);
      } else if (data.estado === 'pending') {
        estado.innerHTML =
          '<div style="font-size:2.5rem;">⏳</div>'
          +'<p style="font-weight:700;margin-top:0.5rem;">Pago pendiente</p>'
          +'<p style="font-size:0.8rem;color:var(--text-muted);">Espera unos minutos e intenta de nuevo.</p>';
        if(btn){btn.disabled=false;btn.textContent='Verificar de nuevo';btn.style.display='block';}
      } else {
        estado.innerHTML =
          '<div style="font-size:2.5rem;">❌</div>'
          +'<p style="font-weight:700;color:#e53;margin-top:0.5rem;">Pago no verificado</p>'
          +'<a href="https://wa.me/51936710169" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:0.8rem;background:#25D366;color:#fff;border-radius:50px;padding:8px 18px;text-decoration:none;font-weight:800;font-size:0.85rem;">💬 WhatsApp</a>';
        if(btn) btn.style.display='none';
      }
    })
    .catch(function(err){
      clearTimeout(timeoutId);
      estado.innerHTML =
        '<div style="font-size:2.5rem;">⚠️</div>'
        +'<p style="font-weight:700;margin-top:0.5rem;">'+(err.name==='AbortError'?'Tiempo agotado':'Sin conexión')+'</p>'
        +'<p style="font-size:0.8rem;color:var(--text-muted);">Envía tu comprobante por WhatsApp.</p>'
        +'<a href="https://wa.me/51936710169" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:0.8rem;background:#25D366;color:#fff;border-radius:50px;padding:8px 18px;text-decoration:none;font-weight:800;font-size:0.85rem;">💬 Enviar comprobante</a>';
      if(btn) btn.style.display='none';
    });
  }

  function cerrarVerificacion() { document.getElementById('verificacion-modal').classList.remove('open'); }

  function mostrarConfirmacion(metodo, total) {
    var modal = document.getElementById('verificacion-modal');
    var totalSafe = parseInt(total) || 0;
    document.getElementById('verif-estado').innerHTML =
      '<div style="font-size:3rem;">💜</div>'
      +'<p style="font-family:\'Fredoka One\',cursive;font-size:1.3rem;margin-top:0.5rem;">¡Yape enviado!</p>'
      +'<p style="font-size:0.85rem;color:var(--text-muted);">Monto: S/ '+totalSafe+'</p>'
      +'<p style="font-size:0.82rem;margin-top:0.5rem;">Te confirmamos tu pedido por WhatsApp en breve 🚀</p>';
    document.getElementById('verif-btn').style.display = 'none';
    modal.classList.add('open');
    cart = []; saveCart(); updateCartCount();
  }

  // UTILIDADES
  function showToast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(function(){t.classList.remove('show');},2500);
  }

  function subscribeNL() {
    var email = document.getElementById('nl-email').value;
    if (!email||!email.includes('@')) { alert('Por favor ingresa un correo válido'); return; }
    showToast('🎉 ¡Suscripción exitosa!');
    document.getElementById('nl-email').value='';
  }

  document.getElementById('cart-modal').addEventListener('click',function(e){if(e.target===this)closeCart();});
  document.getElementById('payment-modal').addEventListener('click',function(e){if(e.target===this)closePayment();});
  document.getElementById('detail-modal').addEventListener('click',function(e){if(e.target===this)closeDetail();});
  document.getElementById('verificacion-modal').addEventListener('click',function(e){if(e.target===this)cerrarVerificacion();});

  // Precarga imagen del primer producto
  (function(){
    var first = products.find(function(p){ return p.imgs && p.imgs.length > 0; });
    if (first && first.imgs[0]) {
      var link = document.createElement('link');
      link.rel = 'preload'; link.as = 'image'; link.href = first.imgs[0];
      document.head.appendChild(link);
    }
  })();

  // Cargar carrito guardado de la sesión anterior
  loadCart();
  renderProducts();

// ===== EXPONER FUNCIONES AL SCOPE GLOBAL =====
if (typeof openCart !== 'undefined') window.openCart = openCart;
if (typeof closeCart !== 'undefined') window.closeCart = closeCart;
if (typeof openPayment !== 'undefined') window.openPayment = openPayment;
if (typeof closePayment !== 'undefined') window.closePayment = closePayment;
if (typeof openDetail !== 'undefined') window.openDetail = openDetail;
if (typeof closeDetail !== 'undefined') window.closeDetail = closeDetail;
if (typeof addToCart !== 'undefined') window.addToCart = addToCart;
if (typeof addFromDetail !== 'undefined') window.addFromDetail = addFromDetail;
if (typeof removeFromCart !== 'undefined') window.removeFromCart = removeFromCart;
if (typeof filterCat !== 'undefined') window.filterCat = filterCat;
if (typeof filterProducts !== 'undefined') window.filterProducts = filterProducts;
if (typeof filterByAge !== 'undefined') window.filterByAge = filterByAge;
if (typeof renderProducts !== 'undefined') window.renderProducts = renderProducts;
if (typeof switchTab !== 'undefined') window.switchTab = switchTab;
if (typeof confirmYape !== 'undefined') window.confirmYape = confirmYape;
if (typeof goToMP !== 'undefined') window.goToMP = goToMP;
if (typeof verificarPagoMP !== 'undefined') window.verificarPagoMP = verificarPagoMP;
if (typeof cerrarVerificacion !== 'undefined') window.cerrarVerificacion = cerrarVerificacion;
if (typeof subscribeNL !== 'undefined') window.subscribeNL = subscribeNL;
if (typeof dGo !== 'undefined') window.dGo = dGo;
if (typeof dSlide !== 'undefined') window.dSlide = dSlide;
if (typeof goDot !== 'undefined') window.goDot = goDot;
if (typeof moveCarr !== 'undefined') window.moveCarr = moveCarr;
if (typeof showToast !== 'undefined') window.showToast = showToast;
if (typeof loadCart !== 'undefined') window.loadCart = loadCart;
if (typeof saveCart !== 'undefined') window.saveCart = saveCart;
