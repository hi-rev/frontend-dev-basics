package ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch08.dto.JsonResult;
import ch08.vo.GuestBookVo;

@RestController
@RequestMapping("/guestbook/api")
public class GuestBookController {
	
	@PostMapping("")
	public JsonResult ex01(@RequestBody GuestBookVo vo) {
		// guestbookService.addMessage(vo);
		
		vo.setNo(1L); // test용
		vo.setPassword(" "); // password는 비워줘야함
		
		return JsonResult.success(vo);
	}
	
	@GetMapping("")
	public JsonResult ex02(@RequestParam(value="sno", required=true, defaultValue="0") Long startNo) {
		List<GuestBookVo> list = new ArrayList<>();
		
		GuestBookVo vo1 = new GuestBookVo();
		vo1.setNo(10L);
		vo1.setName("둘리");
		vo1.setMessage("호이~");
		list.add(vo1);
		
		GuestBookVo vo2 = new GuestBookVo();
		vo2.setNo(9L);
		vo2.setName("둘리2");
		vo2.setMessage("호이~2");
		list.add(vo2);

		GuestBookVo vo3 = new GuestBookVo();
		vo3.setNo(8L);
		vo3.setName("둘리3");
		vo3.setMessage("호이~3");
		list.add(vo3);

		return JsonResult.success(list);
	}
	
}
