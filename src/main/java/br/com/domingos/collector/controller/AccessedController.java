package br.com.domingos.collector.controller;

import br.com.domingos.collector.entity.Accessed;
import br.com.domingos.collector.exception.ObjectNotFoundException;
import br.com.domingos.collector.service.AccessedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AccessedController {

    private final AccessedService accessedService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Accessed accessed) {
        this.accessedService.save(accessed);

        return ResponseEntity.ok(accessed);
    }

    @GetMapping
    public ResponseEntity<List<Accessed>> findAll(Accessed accessed) {
        List<Accessed> list = this.accessedService.findAll(accessed);

        return ResponseEntity.ok(list);
    }

    @GetMapping(params = "cnpj")
    public ResponseEntity<Accessed> getByCnpj(@RequestParam("cnpj") String cnpj) {
        return this.accessedService.findByCnpj(cnpj)
                .map(accessed -> ResponseEntity.ok(accessed)).orElse(ResponseEntity.notFound().build());
    }

}
