const check = function (item) {
  if (item.matches('[placeholder="Ваше имя"]')) {
    item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]/g, '');
  }
  if (item.matches('[placeholder="Номер телефона"]')) {
    item.value = item.value.replace(/^\s|[А-Яа-яA-Za-z?@!.~'_*"/^&±,%#%+=:$?|;]/g, '');
  }
  if (item.matches('[placeholder="Ваш номер телефона"]')) {
    item.value = item.value.replace(/^\s|[А-Яа-яA-Za-z?@!.~'_*"/^&±,%#%+=:$?|;]/g, '');
  }
  if (item.matches('[placeholder="E-mail"]')) {
    item.value = item.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
  }
  if (item.matches('[placeholder="Ваш E-mail"]')) {
    item.value = item.value.replace(/^\s|[А-Яа-я0-9`"/^&±,()%#%+=:$?|;]/g, '');
  }
  if (item.matches('[placeholder="Ваше сообщение"]')) {
    item.value = item.value.replace(/^\s|[.`"!/,?^*()#%-+=:'$@~;\w]/g, '');
  }
  else {
    return;
  }
};

console.log(111);

export default check;